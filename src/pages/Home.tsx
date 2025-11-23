import { Link } from "react-router-dom";
import { ArrowRight, Search, Crown, Scissors, Sparkles, Droplets, Activity, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import { teamMembers } from "@/data/teamData";
const Home = () => {
  const mainDoctor = teamMembers[0];
  const teamPreview = teamMembers.slice(1, 4);
  const services = [{
    icon: Search,
    title: "Диагностика",
    slug: "diagnostics"
  }, {
    icon: Crown,
    title: "Ортопедия",
    slug: "orthopedics"
  }, {
    icon: Sparkles,
    title: "Эстетика",
    slug: "aesthetics"
  }, {
    icon: Scissors,
    title: "Хирургия",
    slug: "surgery"
  }, {
    icon: Droplets,
    title: "Гигиена",
    slug: "hygiene"
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-20 px-5 sm:px-6 md:px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-95">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 sm:h-32 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 blur-3xl animate-wave" style={{
          animationDuration: '8s'
        }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 md:mb-6 text-3xl text-center">
              BFP Concept — Биофункциональная стоматология








      






            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-7 md:mb-8 leading-relaxed reveal-section reveal-delay-1">
              Диагностика. Функциональное восстановление. Эстетическая стоматология.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 md:gap-4 justify-center reveal-section reveal-delay-2 max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="h-12 sm:h-11 md:h-12 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                <Link to="/contacts">Записаться</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 sm:h-11 md:h-12 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                <Link to="/services/diagnostics">Первичная диагностика</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">О клинике</h2>
            <div className="space-y-4 sm:space-y-5 text-[0.9375rem] leading-relaxed sm:text-base md:text-lg text-muted-foreground">
              <p>
                BFP Concept — это клиника биофункциональной стоматологии, где мы рассматриваем зубочелюстную систему как часть всего организма.
              </p>
              <p>
                Мы анализируем связь прикуса с осанкой, мышечным балансом и функцией височно-нижнечелюстных суставов.
              </p>
              <p>
                Наш подход: сначала диагностика, затем восстановление функции, и только потом — эстетика. Это обеспечивает долговременный и предсказуемый результат.
              </p>
            </div>
            <Button asChild className="mt-7 sm:mt-8 w-full sm:w-auto h-12" size="lg">
              <Link to="/about">
                Узнать больше <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Doctor Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="reveal-section w-full md:order-1">
                <img src={mainDoctor.image} alt={mainDoctor.name} className="w-full aspect-[3/4] object-cover object-center rounded-xl md:rounded-2xl shadow-2xl" />
              </div>
              <div className="reveal-section reveal-delay-1 w-full md:order-2">
                <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4">Главный врач</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">{mainDoctor.name}</h3>
                <p className="text-[0.9375rem] sm:text-base md:text-lg text-muted-foreground mb-5 md:mb-6">{mainDoctor.position}</p>
                <ul className="space-y-3 sm:space-y-3.5 mb-7 md:mb-8">
                  {mainDoctor.shortDescription.slice(0, 4).map((item, idx) => <li key={idx} className="flex items-start text-[0.9375rem] sm:text-base md:text-base lg:text-lg leading-relaxed">
                      <span className="text-primary mr-2.5 md:mr-3 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
                <Button asChild size="lg" className="w-full sm:w-auto h-12">
                  <Link to={`/team/${mainDoctor.slug}`}>
                    Подробнее о враче <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Наша команда</h2>
            <p className="text-[0.9375rem] sm:text-base md:text-lg lg:text-xl text-muted-foreground">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {teamPreview.map((member, idx) => <div key={member.id} className={`reveal-section reveal-delay-${idx + 1}`}>
                <TeamCard member={member} />
              </div>)}
          </div>
          <div className="text-center reveal-section reveal-delay-4">
            <Button asChild size="lg" variant="outline" className="h-12 w-full sm:w-auto">
              <Link to="/team">
                Вся команда <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Наши услуги</h2>
            <p className="text-[0.9375rem] sm:text-base md:text-lg lg:text-xl text-muted-foreground">
              Полный спектр стоматологических услуг
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-6">
            {services.map((service, idx) => {
            const Icon = service.icon;
            return <Link key={service.slug} to={`/services/${service.slug}`} className={`reveal-section reveal-delay-${idx % 4 + 1}`}>
                  <div className="bg-card rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8 shadow-lg card-hover text-center h-full">
                    <Icon className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold leading-tight">{service.title}</h3>
                  </div>
                </Link>;
          })}
          </div>
          <div className="text-center mt-8 md:mt-12 reveal-section reveal-delay-4">
            <Button asChild size="lg" className="h-12 w-full sm:w-auto">
              <Link to="/services">
                Все услуги <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Результаты</h2>
            <p className="text-[0.9375rem] sm:text-base md:text-lg lg:text-xl text-muted-foreground">
              Наши работы говорят сами за себя
            </p>
          </div>
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-1">
            <BeforeAfterSlider beforeImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop" afterImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop" alt="Ортопедическая реставрация" />
          </div>
          <div className="text-center mt-8 md:mt-12 reveal-section reveal-delay-2">
            <Button asChild size="lg" variant="outline" className="h-12 w-full sm:w-auto">
              <Link to="/before-after">
                Смотреть все работы <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Отзывы пациентов</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map(i => <div key={i} className={`bg-card rounded-xl p-6 md:p-8 shadow-lg reveal-section reveal-delay-${i}`}>
                <div className="flex items-center mb-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-base">
                    {i}
                  </div>
                  <div className="ml-3.5 md:ml-4">
                    <div className="font-semibold text-base">Пациент {i}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Пациент клиники</div>
                  </div>
                </div>
                <p className="text-[0.9375rem] md:text-base text-muted-foreground leading-relaxed">
                  Отличная клиника с профессиональным подходом. Результат превзошел все ожидания. Спасибо команде BFP Concept!
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Наша клиника</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className={`aspect-square overflow-hidden rounded-xl reveal-section reveal-delay-${i % 4 + 1}`}>
                <img src={`https://images.unsplash.com/photo-162917495617${i}-c8b417780e63?w=600&h=600&fit=crop`} alt={`Интерьер клиники ${i}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 pb-24 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="reveal-section">
                <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Контакты</h2>
                <div className="space-y-5 md:space-y-6 text-[0.9375rem] sm:text-base md:text-lg">
                  <div>
                    <div className="font-semibold mb-2">Адрес</div>
                    <div className="text-muted-foreground leading-relaxed">Москва, Алтуфьевское шоссе 89А</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Телефон</div>
                    <a className="text-primary hover:underline" href="tel:+74951200188">+7 (495) 123-45-67</a>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <a href="mailto:info@bfpconcept.ru" className="text-primary hover:underline">info@bfpconcept.ru</a>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">WhatsApp</div>
                    <a href="https://wa.me/74951234567" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="reveal-section reveal-delay-1">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;