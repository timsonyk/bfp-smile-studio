import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
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
        className="w-full h-12 text-base rounded-none bg-foreground text-background hover:bg-foreground/90"
        size="lg"
      >
        Отправить
      </Button>
    </form>
  );
};

export default BookingForm;
