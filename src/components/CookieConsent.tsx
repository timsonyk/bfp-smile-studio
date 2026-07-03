import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const COOKIE_CONSENT_KEY = "cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
  };

  const handleRejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-card border-t border-border shadow-lg animate-in slide-in-from-bottom-4 duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-2 md:mb-4">
          <h3 className="text-sm md:text-base font-medium mb-1 md:mb-2">Политика использования файлов cookie</h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-snug">
            Мы используем файлы cookie для анализа посещаемости и показа релевантной рекламы.
          </p>
        </div>

        {showSettings && (
          <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 p-3 md:p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Checkbox
                id="necessary"
                checked={true}
                disabled
                className="mt-0.5"
              />
              <div>
                <label htmlFor="necessary" className="text-sm font-medium cursor-not-allowed">
                  Необходимые файлы cookie (всегда активны)
                </label>
                <p className="text-xs text-muted-foreground">
                  Для корректной работы сайта. Отключить нельзя.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: !!checked }))
                }
                className="mt-0.5"
              />
              <div>
                <label htmlFor="analytics" className="text-sm font-medium cursor-pointer">
                  Аналитические файлы cookie
                </label>
                <p className="text-xs text-muted-foreground">
                  Помогают понять, как используется сайт (Яндекс.Метрика).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: !!checked }))
                }
                className="mt-0.5"
              />
              <div>
                <label htmlFor="marketing" className="text-sm font-medium cursor-pointer">
                  Маркетинговые файлы cookie
                </label>
                <p className="text-xs text-muted-foreground">
                  Для показа персонализированных предложений.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3">
          <div className="text-xs text-muted-foreground hidden md:block">
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Политика конфиденциальности
            </Link>
            <span className="mx-2">·</span>
            <span>Выбор сохраняется на 12 месяцев</span>
          </div>

          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:justify-end">
            {!showSettings && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="text-xs"
              >
                Настроить
              </Button>
            )}

            {showSettings && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleAcceptSelected}
                className="text-xs"
              >
                Принять выбранные
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectAll}
              className="text-xs"
            >
              Только необходимые
            </Button>

            <Button size="sm" onClick={handleAcceptAll} className="text-xs col-span-2 md:col-span-1">
              Принять все
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center md:hidden">
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
