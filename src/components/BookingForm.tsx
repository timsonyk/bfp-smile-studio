import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { clinicInfo } from "@/data/clinicInfo";

// Заявка уходит на свой сервер (server/index.mjs), а не напрямую в Telegram:
// персональные данные сначала должны записаться в России (ч. 5 ст. 18 152-ФЗ).
// Поля «опишите ситуацию» нет намеренно — там пишут о здоровье, а это
// специальная категория данных со своими требованиями к согласию.
const BookingForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/zayavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({ name: "", phone: "", time: "", company: "" });
      setConsent(false);
    } catch (error) {
      toast({
        title: "Не удалось отправить заявку",
        description: `Позвоните нам: ${clinicInfo.phone}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
        Записаться на приём
      </p>

      <div>
        <label className="block text-xs text-muted-foreground mb-2">Имя</label>
        <Input
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          maxLength={100}
          className="h-11 text-base bg-transparent border-border focus:border-foreground/50 rounded-none"
        />
      </div>

      <div>
        <label className="block text-xs text-muted-foreground mb-2">Телефон</label>
        <Input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          maxLength={30}
          className="h-11 text-base bg-transparent border-border focus:border-foreground/50 rounded-none"
        />
      </div>

      <div>
        <label className="block text-xs text-muted-foreground mb-2">
          Удобное время для звонка
        </label>
        <Input
          placeholder="Например, будни после 18:00 (необязательно)"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          maxLength={100}
          className="h-11 text-base bg-transparent border-border focus:border-foreground/50 rounded-none"
        />
      </div>

      {/* Ловушка для ботов: поле скрыто от людей и от скринридеров */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="hidden"
      />

      {/* Галочка снята по умолчанию: заранее поставленную Роскомнадзор согласием не считает */}
      <label className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-foreground"
        />
        <span>
          Я даю{" "}
          <Link to="/soglasie" target="_blank" className="underline hover:text-foreground">
            согласие на обработку персональных данных
          </Link>{" "}
          и ознакомлен(а) с{" "}
          <Link to="/privacy-policy" target="_blank" className="underline hover:text-foreground">
            политикой обработки персональных данных
          </Link>
        </span>
      </label>

      <Button
        type="submit"
        disabled={isLoading || !consent}
        className="w-full h-12 text-base rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
        size="lg"
      >
        {isLoading ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
};

export default BookingForm;
