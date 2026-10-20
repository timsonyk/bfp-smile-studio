# Сборка фронта и запуск server/index.mjs: он раздаёт dist/ и принимает
# заявки на /api/zayavka. Переменные окружения — в server/index.mjs.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=build /app/dist ./dist
COPY server ./server
EXPOSE 3000
USER node
CMD ["node", "server/index.mjs"]
