import { Phone } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

// Запись по телефону и в мессенджерах — временно вместо формы (BookingForm),
// пока не решено, куда форма будет отправлять заявки внутри России.
// Сайт при этом не собирает персональные данные.
const BookingContacts = ({ title }: { title?: string }) => {
  const c = clinicInfo;
  return (
    <div className="flex flex-col h-full">
      {title && (
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">{title}</p>
      )}
      <p className="text-base md:text-lg leading-relaxed mb-8">
        Позвоните или напишите нам — администратор подберёт удобное время и ответит на
        вопросы.
      </p>

      <a
        href={c.phoneHref}
        className="flex items-center justify-center gap-3 w-full h-14 bg-foreground text-background rounded-lg text-base font-medium hover:bg-foreground/90 transition-colors btn-press"
      >
        <Phone className="w-5 h-5" />
        {c.phone}
      </a>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <a
          href={c.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors btn-press"
        >
          WhatsApp
        </a>
        <a
          href={c.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors btn-press"
        >
          Telegram
        </a>
      </div>

      <p className="text-sm text-muted-foreground mt-6 text-center">{c.hours}</p>
    </div>
  );
};

export default BookingContacts;
