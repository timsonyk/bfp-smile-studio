import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-foreground">BFP</span>
              <span className="text-xl font-light">Concept</span>
            </div>
            <p className="text-sm text-accent-foreground/80">
              Биофункциональная стоматология. Комплексный подход к лечению и эстетике.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">О клинике</Link></li>
              <li><Link to="/team" className="hover:text-primary-foreground transition-colors">Команда</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Услуги</Link></li>
              <li><Link to="/before-after" className="hover:text-primary-foreground transition-colors">До/После</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/diagnostics" className="hover:text-primary-foreground transition-colors">Диагностика</Link></li>
              <li><Link to="/services/orthopedics" className="hover:text-primary-foreground transition-colors">Ортопедия</Link></li>
              <li><Link to="/services/surgery" className="hover:text-primary-foreground transition-colors">Хирургия</Link></li>
              <li><Link to="/services/aesthetics" className="hover:text-primary-foreground transition-colors">Эстетика</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Москва, Алтуфьевское шоссе 89А</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-primary-foreground transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@bfpconcept.ru" className="hover:text-primary-foreground transition-colors">info@bfpconcept.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} BFP Concept. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
