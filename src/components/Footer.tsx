import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-lg font-medium tracking-tight">
                BFP <span className="font-light">Concept</span>
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
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О клинике
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/before-after" className="text-muted-foreground hover:text-foreground transition-colors">
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
                <Link to="/services/diagnostics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Диагностика
                </Link>
              </li>
              <li>
                <Link to="/services/orthopedics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ортопедия
                </Link>
              </li>
              <li>
                <Link to="/services/surgery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Хирургия
                </Link>
              </li>
              <li>
                <Link to="/services/aesthetics" className="text-muted-foreground hover:text-foreground transition-colors">
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
          <p>&copy; {new Date().getFullYear()} BFP Concept</p>
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
