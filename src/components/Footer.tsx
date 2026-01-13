import { Link } from "react-router-dom";

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

        {/* Bottom */}
        <div className="border-t border-border mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} bfp concept</p>
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
              href="https://t.me/bfsclinic"
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
