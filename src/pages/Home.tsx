import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import { teamMembers } from "@/data/teamData";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";
import clinic4 from "@/assets/clinic-4.png";
import clinic5 from "@/assets/clinic-5.png";

// Uncomment when you add the kanji image:
// import kanjiImg from "@/assets/kanji.png";

const Home = () => {
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
          Более наполненный hero с ключевой информацией
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Левая часть — текст */}
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
                  bfp <span className="font-light">concept</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
                  Клиника биофункциональной стоматологии в Москве
                </p>

                <p className="text-base text-muted-foreground/80 mb-12 max-w-md leading-relaxed">
                  Мы восстанавливаем функцию зубочелюстной системы, чтобы эстетика стала её естественным следствием.
                </p>

                {/* Контакты */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider w-20">Телефон</span>
                    <a
                      href="tel:+74951200188"
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      +7 (495) 120-01-88
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider w-20">Адрес</span>
                    <span className="text-lg">
                      Дербеневская наб., 1/2
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/74951200188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
                  >
                    Записаться
                  </a>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 border border-border text-sm hover:bg-secondary transition-colors"
                  >
                    О клинике
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Правая часть — краткие принципы */}
              <div className="hidden md:block">
                <div className="space-y-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8">
                    Принципы работы
                  </p>
                  {[
                    { num: "01", text: "Сначала диагностика — потом лечение" },
                    { num: "02", text: "Функция важнее эстетики" },
                    { num: "03", text: "Системный подход к каждому пациенту" },
                    { num: "04", text: "Предсказуемый долгосрочный результат" },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-6 items-start">
                      <span className="text-xs text-muted-foreground font-medium">{item.num}</span>
                      <p className="text-base text-foreground/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              <div>
                <img
                  src={mainDoctor.image}
                  alt={mainDoctor.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>

              {/* Информация */}
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
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 3: ФИЛОСОФИЯ
          4 этапа подхода. Иероглифы — изображением (когда добавишь).
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        {/*
          Иероглифы как фоновый элемент — раскомментируй когда добавишь изображение:
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-[0.03]">
            <img src={kanjiImg} alt="" className="w-[40rem] md:w-[60rem]" />
          </div>
        */}

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-16 md:mb-24">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Подход
              </p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Философия лечения
              </h2>
            </div>

            {/* 4 блока философии */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
              {philosophySteps.map((step) => (
                <div key={step.number} className="border-l-2 border-border pl-8">
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
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Результаты
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">
              Работы
            </h2>
          </div>

          {/* Слайдеры */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {beforeAfterCases.map((item, idx) => (
                <div key={idx}>
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    alt={item.title}
                  />
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ссылка */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/before-after"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Все работы
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 5: КОМАНДА
          Люди. Без театральности.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Специалисты
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">
              Команда
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {allTeam.map((member) => (
              <div key={member.id}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/team"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Вся команда
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 6: ПРОСТРАНСТВО (Интерьер)
          Интерьер как продолжение философии.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Пространство
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">
              Клиника
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 max-w-6xl mx-auto">
            {[clinic1, clinic2, clinic3, clinic4, clinic5].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Интерьер клиники`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          БЛОК 7: КОНТАКТЫ
          Форма и информация.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Контактная информация */}
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

              {/* Форма записи */}
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
