import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const Home = () => {
  const mainDoctor = teamMembers[0];
  const allTeam = teamMembers;

  const beforeAfterCases = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
      title: "Ортопедическая реставрация"
    },
    {
      before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
      title: "Эстетическая реставрация"
    },
    {
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1579165466991-467135ad3110?w=800&h=600&fit=crop",
      title: "Виниры"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Clean, no background image */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center pt-20 md:pt-24 border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider mb-8" />
            <h1 className="mb-6">
              BFP Concept
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 mx-auto">
              Биофункциональная стоматология
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
              Диагностика. Функциональное восстановление. Эстетика.
            </p>

            {/* WhatsApp & Telegram buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 text-base border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
              >
                <a href="https://wa.me/74951200188" target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 text-base border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
              >
                <a href="https://t.me/bfpconcept" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artur Makarov - Part 1: 2x2 Grid */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Photo */}
              <div>
                <img
                  src={mainDoctor.image}
                  alt={mainDoctor.name}
                  className="w-full aspect-[3/4] object-cover object-center"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Основатель клиники
                </p>
                <h2 className="mb-6">{mainDoctor.name}</h2>
                <p className="text-muted-foreground mb-10">
                  {mainDoctor.position}
                </p>

                {/* 2x2 Grid of info blocks */}
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Опыт</p>
                    <p className="text-base">С 1995 года</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Специализация</p>
                    <p className="text-base">Ортопедия, гнатология</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Подход</p>
                    <p className="text-base">Биофункциональный</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Концепция</p>
                    <p className="text-base">Автор методики BFP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artur Makarov - Part 2: Vertical blocks */}
      <section className="section-padding bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Философия лечения
              </p>
              <h2>Комплексный подход</h2>
            </div>

            {/* 4 vertical blocks */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="border-l border-border pl-6">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">01</p>
                <h3 className="text-lg mb-2">Диагностика</h3>
                <p className="text-muted-foreground text-sm">
                  Полный анализ зубочелюстной системы, осанки и функции ВНЧС
                </p>
              </div>

              <div className="border-l border-border pl-6">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">02</p>
                <h3 className="text-lg mb-2">Планирование</h3>
                <p className="text-muted-foreground text-sm">
                  3D-сканирование, фотопротокол, комплексный план лечения
                </p>
              </div>

              <div className="border-l border-border pl-6">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">03</p>
                <h3 className="text-lg mb-2">Функция</h3>
                <p className="text-muted-foreground text-sm">
                  Восстановление правильной работы всей зубочелюстной системы
                </p>
              </div>

              <div className="border-l border-border pl-6">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">04</p>
                <h3 className="text-lg mb-2">Эстетика</h3>
                <p className="text-muted-foreground text-sm">
                  Финальный этап — красота на основе здоровой функции
                </p>
              </div>
            </div>

            <div className="text-center mt-12 md:mt-16">
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <Link to={`/team/${mainDoctor.slug}`}>
                  Подробнее о враче
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section - Multiple sliders */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Результаты
            </p>
            <h2>До и после</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {beforeAfterCases.map((item, idx) => (
                <div key={idx}>
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    alt={item.title}
                  />
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <Link to="/before-after">
                Все работы
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section - Clean Grid */}
      <section className="section-padding bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Специалисты
            </p>
            <h2>Команда</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {allTeam.map((member) => (
              <div key={member.id}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <Link to="/team">
                Вся команда
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Направления
            </p>
            <h2>Услуги</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
              {[
                { title: "Диагностика", slug: "diagnostics", desc: "Комплексный анализ" },
                { title: "Ортопедия", slug: "orthopedics", desc: "Восстановление функции" },
                { title: "Эстетика", slug: "aesthetics", desc: "Виниры, отбеливание" },
                { title: "Хирургия", slug: "surgery", desc: "Имплантация" },
                { title: "Гигиена", slug: "hygiene", desc: "Профессиональный уход" },
                { title: "Терапия", slug: "therapy", desc: "Лечение зубов" },
              ].map((service, idx) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`border-b border-border py-6 px-4 flex justify-between items-center hover:bg-secondary/30 transition-colors group ${idx % 2 === 0 ? 'md:border-r' : ''}`}
                >
                  <div>
                    <h3 className="text-base font-medium mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <Link to="/services">
                Все услуги
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinic Gallery - Minimal */}
      <section className="section-padding bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Пространство
            </p>
            <h2>Клиника</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 max-w-6xl mx-auto">
            {[clinic1, clinic2, clinic3, clinic4, clinic5].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Клиника ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Связаться
                </p>
                <h2 className="mb-8">Контакты</h2>

                <div className="space-y-6 text-base">
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Адрес</p>
                    <p>Москва, Дербеневская набережная, 1/2</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Телефон</p>
                    <a className="hover:text-muted-foreground transition-colors" href="tel:+74951200188">
                      +7 (495) 120-01-88
                    </a>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Email</p>
                    <a href="mailto:info@bfpconcept.ru" className="hover:text-muted-foreground transition-colors">
                      info@bfpconcept.ru
                    </a>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Мессенджеры</p>
                    <div className="flex gap-4">
                      <a
                        href="https://wa.me/74951200188"
                        className="hover:text-muted-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/bfpconcept"
                        className="hover:text-muted-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
