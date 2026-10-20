// Сервер сайта: раздаёт собранный dist/ и принимает заявки из формы записи.
//
// Заявка с персональными данными уходит письмом в ящик клиники на Яндекс 360 —
// это первая запись данных, и она происходит на серверах в России
// (ч. 5 ст. 18 152-ФЗ). В Telegram, если он настроен, уходит только
// уведомление без имени и телефона: передавать туда сами данные — это
// трансграничная передача.
//
// Переменные окружения:
//   PORT                  порт, по умолчанию 3000
//   SMTP_USER, SMTP_PASS  ящик на Яндекс 360 и пароль приложения к нему
//   SMTP_HOST, SMTP_PORT  по умолчанию smtp.yandex.ru:465
//   MAIL_TO               куда слать заявки, по умолчанию info@bfpconcept.ru
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID  необязательно, уведомление без данных

import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const PORT = Number(process.env.PORT) || 3000;
const MAIL_TO = process.env.MAIL_TO || "info@bfpconcept.ru";

// Версия текста согласия. Поднять вместе с изменением src/pages/Consent.tsx,
// чтобы в каждом письме было видно, на какой редакции дано согласие.
const CONSENT_VERSION = "2026-10-20";

const mailer = process.env.SMTP_USER
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.yandex.ru",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

if (!mailer) {
  console.warn("SMTP_USER не задан — заявки приниматься не будут");
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".otf": "font/otf",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".mp4": "video/mp4",
};

async function serveStatic(req, res) {
  const url = new URL(req.url, "http://x");
  let file = path.join(ROOT, path.normalize(decodeURIComponent(url.pathname)));
  if (!file.startsWith(ROOT)) {
    res.writeHead(400).end();
    return;
  }
  let stat = await fs.stat(file).catch(() => null);
  if (stat?.isDirectory()) {
    file = path.join(file, "index.html");
    stat = await fs.stat(file).catch(() => null);
  }
  // Маршруты React Router: всё, чего нет на диске, отдаём как index.html
  if (!stat) {
    file = path.join(ROOT, "index.html");
  }
  const body = await fs.readFile(file);
  const hashed = file.includes(`${path.sep}assets${path.sep}`);
  res.writeHead(200, {
    "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
    "Cache-Control": hashed ? "public, max-age=31536000, immutable" : "no-cache",
  });
  res.end(req.method === "HEAD" ? undefined : body);
}

// Не больше 5 заявок с одного адреса за 10 минут
const hits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > 10_000) {
        reject(new Error("too large"));
        req.destroy();
      } else {
        chunks.push(c);
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

const clean = (v, max) => String(v ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);

function send(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

async function handleBooking(req, res) {
  const ip = String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
    .split(",")[0]
    .trim();
  if (tooMany(ip)) {
    return send(res, 429, { error: "Слишком много заявок, попробуйте позже" });
  }

  let data;
  try {
    data = await readJson(req);
  } catch {
    return send(res, 400, { error: "Некорректный запрос" });
  }

  // Скрытое поле: человек его не видит, боты заполняют
  if (data.company) {
    return send(res, 200, { ok: true });
  }

  const name = clean(data.name, 100);
  const phone = clean(data.phone, 30);
  const time = clean(data.time, 100);
  const digits = phone.replace(/\D/g, "");
  if (!name || digits.length < 10 || digits.length > 15) {
    return send(res, 400, { error: "Проверьте имя и телефон" });
  }
  if (data.consent !== true) {
    return send(res, 400, { error: "Нужно согласие на обработку персональных данных" });
  }
  if (!mailer) {
    return send(res, 503, { error: "Форма временно не работает" });
  }

  const when = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
  try {
    await mailer.sendMail({
      from: `"Сайт bfpconcept.ru" <${process.env.SMTP_USER}>`,
      to: MAIL_TO,
      subject: `Заявка на приём: ${name}`,
      text: [
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Удобное время для звонка: ${time || "не указано"}`,
        "",
        `Согласие на обработку ПДн: дано (редакция ${CONSENT_VERSION})`,
        `Дата и время (МСК): ${when}`,
        `IP: ${ip}`,
        `Браузер: ${clean(req.headers["user-agent"], 300)}`,
      ].join("\n"),
    });
  } catch (e) {
    console.error("Не удалось отправить письмо:", e.message);
    return send(res, 502, { error: "Не удалось отправить заявку" });
  }

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `📋 Новая заявка на приём с сайта. Данные — в почте ${MAIL_TO}`,
      }),
    }).catch((e) => console.error("Telegram:", e.message));
  }

  send(res, 200, { ok: true });
}

http
  .createServer(async (req, res) => {
    try {
      if (req.url.split("?")[0] === "/api/zayavka") {
        if (req.method !== "POST") {
          return send(res, 405, { error: "Method not allowed" });
        }
        return await handleBooking(req, res);
      }
      if (req.method !== "GET" && req.method !== "HEAD") {
        res.writeHead(405).end();
        return;
      }
      await serveStatic(req, res);
    } catch (e) {
      console.error(e);
      if (!res.headersSent) {
        res.writeHead(500).end();
      }
    }
  })
  .listen(PORT, () => console.log(`bfpconcept: http://localhost:${PORT}`));
