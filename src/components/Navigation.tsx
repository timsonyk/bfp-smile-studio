import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О клинике" },
    { path: "/team", label: "Команда" },
    { path: "/services", label: "Услуги" },
    { path: "/before-after", label: "До/После" },
    { path: "/contacts", label: "Контакты" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Scroll detection for header style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:outline-none"
      >
        Перейти к содержимому
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        {/* Hairline top accent — subtle Japanese detail */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent 5%, hsl(30 10% 15% / 0.08) 50%, transparent 95%)"
          }}
          aria-hidden="true"
        />

        <nav
          className="container mx-auto px-6 lg:px-8"
          role="navigation"
          aria-label="Основная навигация"
        >
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link
              to="/"
              className="relative flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
              aria-label="bfp concept — На главную"
            >
              <span className="text-lg tracking-tight">
                <span className="font-semibold">bfp</span>
                <span className="font-light text-muted-foreground">concept</span>
              </span>
            </Link>

            {/* Desktop Navigation — generous ma (spacing) */}
            <ul className="hidden lg:flex items-center gap-10 xl:gap-14" role="list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative py-1 text-[13px] tracking-wide uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.label}
                    {/* Active indicator — hairline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                        isActive(link.path) ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Contact */}
            <a
              href="tel:+74951200188"
              className="hidden lg:flex items-center gap-2 text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
              aria-label="Позвонить: +7 495 120 01 88"
            >
              <span aria-hidden="true">+7 495 120 01 88</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {/* Custom hamburger with Japanese aesthetic — parallel lines */}
              <span className="relative w-5 h-4 flex flex-col justify-between" aria-hidden="true">
                <span
                  className={`block h-px bg-foreground transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-foreground transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Bottom hairline — appears on scroll */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(35 15% 80% / 0.6) 20%, hsl(35 15% 80% / 0.6) 80%, transparent)"
          }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <nav
          className={`relative h-full flex flex-col justify-center px-8 transition-transform duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-8"
          }`}
          role="navigation"
          aria-label="Мобильная навигация"
        >
          {/* Decorative vertical line — Japanese aesthetic */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-border to-transparent"
            aria-hidden="true"
          />

          <ul className="space-y-1 pl-8" role="list">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                className={`transition-all duration-500 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms" }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative block py-3 text-2xl sm:text-3xl tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-sm ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                  {/* Active marker — small inkan-style dot */}
                  {isActive(link.path) && (
                    <span
                      className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(8_65%_45%)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact */}
          <div
            className={`mt-16 pl-8 transition-all duration-500 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            {/* Hairline separator */}
            <div
              className="w-12 h-px bg-border mb-6"
              aria-hidden="true"
            />
            <div className="flex items-center gap-4">
              <a
                href="tel:+74951200188"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-sm"
              >
                +7 495 120 01 88
              </a>
              <a
                href="https://t.me/bfpconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
