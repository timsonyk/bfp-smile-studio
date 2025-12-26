import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: "/",
    label: "Главная"
  }, {
    path: "/about",
    label: "О клинике"
  }, {
    path: "/team",
    label: "Команда"
  }, {
    path: "/services",
    label: "Услуги"
  }, {
    path: "/before-after",
    label: "До/После"
  }, {
    path: "/contacts",
    label: "Контакты"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-5 sm:px-6 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">BFP</span>
            <span className="text-xl font-light text-accent">Concept</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all hover:text-primary ${isActive(link.path) ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {link.label}
              </Link>)}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 120-01-88</span>
            </a>
            <Button asChild>
              <Link to="/contacts">Записаться</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-5">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors hover:text-primary py-1 ${isActive(link.path) ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {link.label}
                </Link>)}
              <div className="pt-6 space-y-5 border-t border-border/50">
                <a href="tel:+74951234567" className="flex items-center space-x-3 text-base text-muted-foreground hover:text-primary transition-colors py-2">
                  <Phone className="w-5 h-5" />
                  <span>+7 (495) 120-01-88</span>
                </a>
                <Button asChild className="w-full h-12 text-base" size="lg">
                  <Link to="/contacts" onClick={() => setIsOpen(false)}>Записаться</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;