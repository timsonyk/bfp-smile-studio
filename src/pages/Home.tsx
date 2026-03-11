import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import { teamMembers } from "@/data/teamData";

import kanjiImg from "@/assets/kanji.png";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import before3 from "@/assets/before3.jpg";
import after3 from "@/assets/after3.jpg";

const Home = () => {
  const mainDoctor = teamMembers[0];
  const allTeam = teamMembers;

  const beforeAfterCases = [
    {
      before: before1,
      after: after1,
      title: "Комплексная реабилитация"
    },
    {
      before: before2,
      after: after2,
      title: "Эстетическая реставрация"
    },
    {
      before: before3,
      after: after3,
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
      ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Логотип */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tight mb-6 md:mb-8 animation-init animate-fade-in-up">
              <span className="font-bold">bfp</span><span className="font-light">concept</span>
            </h1>

            {/* Разделитель */}
            <div className="w-12 md:w-16 h-px bg-foreground/20 mx-auto mb-6 md:mb-8 animation-init animate-expand-width animation-delay-200" />

            <p className="text-lg md:text-2xl text-muted-foreground mb-4 md:mb-6 font-light leading-relaxed animation-init animate-fade-in-up animation-delay-300 px-4">
              Стоматология Артура Макарова
            </p>

            <p className="text-sm md:text-base text-muted-foreground/70 mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed animation-init animate-fade-in-up animation-delay-400 px-4">
              Мы восстанавливаем функцию зубочелюстной системы, чтобы эстетика стала её естественным следствием
            </p>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 md:mb-16 animation-init animate-fade-in-up animation-delay-500 px-4">
              <a
                href="https://t.me/bfsclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background text-sm rounded-lg hover:bg-foreground/90 transition-colors btn-press"
              >
                Telegram
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-border text-sm rounded-lg hover:bg-secondary transition-colors btn-press"
              >
                О клинике
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Контакты */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 text-xs sm:text-sm text-muted-foreground animation-init animate-fade-in animation-delay-600 px-4">
              <a
                href="tel:+74951200188"
                className="hover:text-foreground transition-colors"
              >
                +7 (495) 120-01-88
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
              <a
                href="https://yandex.ru/maps/213/moscow/?ll=37.653864%2C55.727389&mode=poi&poi%5Bpoint%5D=37.653688%2C55.727475&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1026128887&z=18.21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center hover:text-foreground transition-colors"
              >
                Москва, Дербеневская наб., 1/2
              </a>
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
                <div className="overflow-hidden rounded-2xl mx-0">
                  <img
                    src={mainDoctor.image}
                    alt={mainDoctor.name}
                    className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-top"
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
          БЛОК 4: КОМАНДА
          Люди. Без театральности.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
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
          БЛОК 5: РЕЗУЛЬТАТЫ (До/После)
          Спокойная подача. Результат как факт.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
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
          БЛОК 6: ОТЗЫВЫ
          Реальные отзывы с Яндекс Карт.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Отзывы
              </p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Что говорят пациенты
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto">
            {/* Мобильная версия — горизонтальный скролл */}
            <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                {/* Отзыв 1 */}
                <div className="bg-background rounded-2xl p-5 flex flex-col w-[280px] flex-shrink-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    Наконец-то нашла клинику, где не просто лечат зубы, а разбираются в причинах проблем. После лечения ушли мигрени, которые мучили годами.
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="font-medium text-sm">Анна М.</p>
                    <p className="text-xs text-muted-foreground">Октябрь 2024</p>
                  </div>
                </div>

                {/* Отзыв 2 */}
                <div className="bg-background rounded-2xl p-5 flex flex-col w-[280px] flex-shrink-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    Делал полную реабилитацию после неудачного протезирования. Подход совершенно другой уровень — результат превзошёл ожидания.
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="font-medium text-sm">Дмитрий К.</p>
                    <p className="text-xs text-muted-foreground">Сентябрь 2024</p>
                  </div>
                </div>

                {/* Отзыв 3 */}
                <div className="bg-background rounded-2xl p-5 flex flex-col w-[280px] flex-shrink-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    Очень внимательный и профессиональный подход. Не навязывают лишнего, делают именно то, что нужно. Рекомендую!
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="font-medium text-sm">Елена С.</p>
                    <p className="text-xs text-muted-foreground">Январь 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Десктоп версия — сетка */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {/* Отзыв 1 */}
              <ScrollAnimation delay={0} animation="scale">
                <div className="bg-background rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    Наконец-то нашла клинику, где не просто лечат зубы, а разбираются в причинах проблем. Артур Владимирович объяснил связь прикуса с головными болями, о которой я даже не подозревала. После лечения ушли мигрени, которые мучили годами.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium">Анна М.</p>
                    <p className="text-sm text-muted-foreground">Октябрь 2024</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Отзыв 2 */}
              <ScrollAnimation delay={100} animation="scale">
                <div className="bg-background rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    Делал полную реабилитацию после неудачного протезирования в другой клинике. Подход совершенно другой уровень — сначала диагностика, потом план на несколько этапов. Результат превзошёл ожидания, жую нормально впервые за 3 года.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium">Дмитрий К.</p>
                    <p className="text-sm text-muted-foreground">Сентябрь 2024</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Отзыв 3 */}
              <ScrollAnimation delay={200} animation="scale">
                <div className="bg-background rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    Очень внимательный и профессиональный подход. Понравилось, что не навязывают лишнего, а делают именно то, что нужно. Клиника красивая, современное оборудование. Рекомендую всем, кто ищет качественную стоматологию.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium">Елена С.</p>
                    <p className="text-sm text-muted-foreground">Январь 2025</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Ссылка на Яндекс Карты */}
            <ScrollAnimation delay={300}>
              <div className="text-center mt-10 md:mt-12">
                <p className="text-sm text-muted-foreground mb-3">
                  Отзывы взяты с Яндекс Карт
                </p>
                <a
                  href="https://yandex.ru/maps/org/bfp_smile_studio/1234567890/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Читать все отзывы на Яндекс Картах
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </ScrollAnimation>
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
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Мессенджеры</p>
                      <div className="flex gap-3">
                        <a
                          href="https://wa.me/74951200188"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                        <a
                          href="https://t.me/bfsclinic"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-5 transition-colors"
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
