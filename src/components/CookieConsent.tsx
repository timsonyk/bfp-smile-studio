import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Аналитики и рекламных cookie на сайте нет, поэтому это уведомление, а не
// выбор категорий. Если подключать Яндекс.Метрику — грузить её только после
// согласия и вернуть сюда выбор «Принять / Отказаться».
const COOKIE_NOTICE_KEY = "cookie_notice_v2";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_NOTICE_KEY)) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const close = () => {
    try {
      localStorage.setItem(COOKIE_NOTICE_KEY, new Date().toISOString());
    } catch {
      // приватный режим — просто скрываем до перезагрузки
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-card border-t border-border shadow-lg animate-in slide-in-from-bottom-4 duration-300">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-xs md:text-sm text-muted-foreground leading-snug flex-1">
          Сайт использует только технически необходимые файлы cookie. Карта Яндекса на
          странице контактов может сохранять собственные cookie. Подробнее — в{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            политике обработки персональных данных
          </Link>
          .
        </p>
        <Button size="sm" onClick={close} className="text-xs shrink-0">
          Понятно
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
