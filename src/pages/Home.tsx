import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import { teamMembers } from "@/data/teamData";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";
import clinic4 from "@/assets/clinic-4.png";
import clinic5 from "@/assets/clinic-5.png";

import kanjiImg from "@/assets/kanji.png";

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const clinicImages = [clinic1, clinic2, clinic3, clinic4, clinic5];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? clinicImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === clinicImages.length - 1 ? 0 : prev + 1));
  };
  const mainDoctor = teamMembers[0];
  const allTeam = teamMembers;

  const beforeAfterCases = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
      title: "Комплексная реабилитация"
    },
    {
      before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
      title: "Эстетическая реставрация"
    },
    {
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1579165466991-467135ad3110?w=800&h=600&fit=crop",
      title: "Функциональное восстановление"
    },
  ];

  const philosophySteps = [
    {
      number: "01",
      title: "Диагностика",
      description: "Полный анализ зубочелюстной системы, осанки, функций ВНЧС. Понимание причин, а не симптомов."
    },
    {
      number: "02",
      title: "Планирование",
      description: "3D-сканирование, фотопротокол, индивидуальный план. Каждый этап продуман заранее."
    },
    {
      number: "03",
      title: "Функция",
      description: "Восстановление правильной работы всей системы. Функция — основа долговечного результата."
    },
    {
      number: "04",
      title: "Эстетика",
      description: "Красота как следствие здоровой функции. Финальный этап, а не единственная цель."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 1: КЛИНИКА (Hero)
          Минималистичный вариант — текст по центру с иероглифами на фоне
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Логотип */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8 animation-init animate-fade-in-up">
              <span className="font-bold">bfp</span><span className="font-light">concept</span>
            </h1>

            {/* Разделитель */}
            <div className="w-16 h-px bg-foreground/20 mx-auto mb-8 animation-init animate-expand-width animation-delay-200" />

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light leading-relaxed animation-init animate-fade-in-up animation-delay-300">
              Клиника биофункциональной стоматологии
            </p>

            <p className="text-base text-muted-foreground/70 mb-12 max-w-xl mx-auto leading-relaxed animation-init animate-fade-in-up animation-delay-400">
              Мы восстанавливаем функцию зубочелюстной системы, чтобы эстетика стала её естественным следствием
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animation-init animate-fade-in-up animation-delay-500">
              <a
                href="https://wa.me/74951200188"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-foreground text-background text-sm rounded-lg hover:bg-foreground/90 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-border text-sm rounded-lg hover:bg-secondary transition-colors"
              >
                О клинике
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Контакты — горизонтально */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm text-muted-foreground animation-init animate-fade-in animation-delay-600">
              <a
                href="tel:+74951200188"
                className="hover:text-foreground transition-colors"
              >
                +7 (495) 120-01-88
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>Москва, Дербеневская наб., 1/2</span>
            </div>
          </div>
        </div>

        {/* Скролл-индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animation-init animate-fade-in animation-delay-800">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/20 to-foreground/40" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 2: ВРАЧ
          Не личный бренд, а часть клиники.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Фото */}
              <ScrollAnimation animation="left">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={mainDoctor.image}
                    alt={mainDoctor.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
              </ScrollAnimation>

              {/* Информация */}
              <ScrollAnimation animation="right" delay={100}>
                <div className="md:pt-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-6">
                    Основатель
                  </p>

                  <h2 className="text-3xl md:text-4xl font-medium mb-4">
                    {mainDoctor.name}
                  </h2>

                  <p className="text-muted-foreground mb-12">
                    {mainDoctor.position}
                  </p>

                  {/* Факты */}
                  <div className="space-y-6">
                    <div className="border-t border-border pt-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Опыт</p>
                      <p className="text-lg">С 1995 года в стоматологии</p>
                    </div>
                    <div className="border-t border-border pt-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Специализация</p>
                      <p className="text-lg">Ортопедия, гнатология, функциональная диагностика</p>
                    </div>
                    <div className="border-t border-border pt-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Подход</p>
                      <p className="text-lg">Автор концепции bfp — биофункциональной философии лечения</p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link
                      to={`/team/${mainDoctor.slug}`}
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Подробнее о враче
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 3: ФИЛОСОФИЯ
          4 этапа подхода. Иероглифы — изображением.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        {/* Иероглифы как фоновый элемент — по центру между 4 блоками */}
        <div className="absolute top-[60%] left-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
          <img src={kanjiImg} alt="" className="w-[80rem] md:w-[120rem]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок */}
            <ScrollAnimation>
              <div className="text-center mb-16 md:mb-24">
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                  Подход
                </p>
                <h2 className="text-3xl md:text-4xl font-medium">
                  Философия лечения
                </h2>
              </div>
            </ScrollAnimation>

            {/* 4 блока философии */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 md:translate-x-8">
              {philosophySteps.map((step, idx) => (
                <ScrollAnimation key={step.number} delay={idx * 100}>
                  <div className="border-l-2 border-border pl-8">
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                      {step.number}
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 4: РЕЗУЛЬТАТЫ (До/После)
          Спокойная подача. Результат как факт.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          {/* Заголовок */}
          <ScrollAnimation>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Результаты
              </p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Работы
              </h2>
            </div>
          </ScrollAnimation>

          {/* Слайдеры */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {beforeAfterCases.map((item, idx) => (
                <ScrollAnimation key={idx} delay={idx * 100} animation="scale">
                  <div>
                    <BeforeAfterSlider
                      beforeImage={item.before}
                      afterImage={item.after}
                      alt={item.title}
                    />
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      {item.title}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Ссылка */}
          <ScrollAnimation delay={300}>
            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/before-after"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Все работы
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 5: КОМАНДА
          Люди. Без театральности.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Специалисты
              </p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Команда
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {allTeam.map((member, idx) => (
              <ScrollAnimation key={member.id} delay={idx * 50} animation="scale">
                <div>
                  <TeamCard member={member} />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={200}>
            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/team"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Вся команда
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 6: ПРОСТРАНСТВО (Интерьер)
          Интерьер как продолжение философии. Bento-сетка.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Пространство
              </p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Клиника
              </h2>
            </div>
          </ScrollAnimation>

          {/* Bento Grid Layout */}
          <ScrollAnimation animation="scale" delay={100}>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Большое фото слева */}
            <button
              onClick={() => openLightbox(0)}
              className="col-span-2 row-span-2 overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <img
                src={clinic1}
                alt="Интерьер клиники"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
            {/* Верхний правый */}
            <button
              onClick={() => openLightbox(1)}
              className="overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <img
                src={clinic2}
                alt="Интерьер клиники"
                loading="lazy"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </button>
            {/* Верхний крайний правый */}
            <button
              onClick={() => openLightbox(2)}
              className="overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <img
                src={clinic3}
                alt="Интерьер клиники"
                loading="lazy"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </button>
            {/* Нижний правый */}
            <button
              onClick={() => openLightbox(3)}
              className="overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <img
                src={clinic4}
                alt="Интерьер клиники"
                loading="lazy"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </button>
            {/* Нижний крайний правый */}
            <button
              onClick={() => openLightbox(4)}
              className="overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <img
                src={clinic5}
                alt="Интерьер клиники"
                loading="lazy"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Закрыть"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Кнопка назад */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Изображение */}
          <img
            src={clinicImages[currentImageIndex]}
            alt="Интерьер клиники"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Кнопка вперёд */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Индикатор */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {clinicImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Фото ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 7: КОНТАКТЫ
          Форма и информация.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Контактная информация */}
              <ScrollAnimation animation="left">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                    Связаться
                  </p>
                  <h2 className="text-3xl md:text-4xl font-medium mb-10">
                    Контакты
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Адрес</p>
                      <p className="text-lg">Москва, Дербеневская набережная, 1/2</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Телефон</p>
                      <a
                        href="tel:+74951200188"
                        className="text-lg hover:text-muted-foreground transition-colors"
                      >
                        +7 (495) 120-01-88
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                      <a
                        href="mailto:info@bfpconcept.ru"
                        className="text-lg hover:text-muted-foreground transition-colors"
                      >
                        info@bfpconcept.ru
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Мессенджеры</p>
                      <div className="flex gap-6">
                        <a
                          href="https://wa.me/74951200188"
                          className="text-lg hover:text-muted-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                        <a
                          href="https://t.me/bfpconcept"
                          className="text-lg hover:text-muted-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Форма записи */}
              <ScrollAnimation animation="right" delay={100}>
                <div>
                  <BookingForm />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
