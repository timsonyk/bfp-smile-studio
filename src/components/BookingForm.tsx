import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_TOKEN = "REDACTED";
const TELEGRAM_CHAT_ID = "847021021";

const BookingForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `
📋 Новая заявка с сайта

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message || "Не указано"}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
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
          className="h-11 text-base bg-transparent border-border focus:border-foreground/50 rounded-none"
        />
      </div>

      <div>
        <label className="block text-xs text-muted-foreground mb-2">Сообщение</label>
        <Textarea
          placeholder="Опишите вашу ситуацию (необязательно)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className="text-base bg-transparent border-border focus:border-foreground/50 rounded-none resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 text-base rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
        size="lg"
      >
        {isLoading ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
};

export default BookingForm;
