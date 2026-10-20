import { Link } from "react-router-dom";
import { clinicInfo, MEDICAL_WARNING } from "@/data/clinicInfo";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-lg tracking-tight">
                <span className="font-bold">bfp</span><span className="font-light">concept</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Биофункциональная стоматология
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Навигация
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  О клинике
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/before-after" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  До/После
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Услуги
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/diagnostics" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Диагностика
                </Link>
              </li>
              <li>
                <Link to="/services/orthopedics" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Ортопедия
                </Link>
              </li>
              <li>
                <Link to="/services/surgery" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Хирургия
                </Link>
              </li>
              <li>
                <Link to="/services/aesthetics" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Эстетика
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Контакты
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Москва, Дербеневская наб., 1/2
              </li>
              <li>
                <a href="tel:+74951200188" className="text-muted-foreground hover:text-foreground transition-colors">
                  +7 (495) 120-01-88
                </a>
              </li>
              <li>
                <a href="mailto:info@bfpconcept.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@bfpconcept.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Предупреждение для рекламы медуслуг (ч. 7 ст. 24 38-ФЗ) */}
        <p className="mt-10 md:mt-12 text-center text-lg md:text-2xl font-medium uppercase tracking-wide text-foreground/80">
          {MEDICAL_WARNING}
        </p>

        {/* Реквизиты и лицензия (ПП РФ № 736, ст. 9 ЗоЗПП) */}
        <div className="mt-6 text-xs text-muted-foreground text-center md:text-left leading-relaxed">
          <p>
            {clinicInfo.shortName} · ОГРН {clinicInfo.ogrn} · ИНН {clinicInfo.inn} ·{" "}
            {clinicInfo.address}
          </p>
          <p>
            Лицензия на медицинскую деятельность № {clinicInfo.license.number} от{" "}
            {clinicInfo.license.date}, выдана: {clinicInfo.license.issuer}
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-6 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-2 md:gap-4">
            <p>&copy; {new Date().getFullYear()} bfp concept</p>
            <Link to="/svedeniya" className="hover:text-foreground transition-colors link-underline">
              Сведения о клинике
            </Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors link-underline">
              Политика обработки персональных данных
            </Link>
            <Link to="/soglasie" className="hover:text-foreground transition-colors link-underline">
              Согласие на обработку данных
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/74951200188"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/bfpconcept"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
