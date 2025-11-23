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

  const services = [
    { icon: Search, title: "Диагностика", slug: "diagnostics" },
    { icon: Crown, title: "Ортопедия", slug: "orthopedics" },
    { icon: Sparkles, title: "Эстетика", slug: "aesthetics" },
    { icon: Scissors, title: "Хирургия", slug: "surgery" },
    { icon: Droplets, title: "Гигиена", slug: "hygiene" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl animate-wave"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              BFP Concept — биофункциональная стоматология
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 reveal-section reveal-delay-1">
              Диагностика. Функциональное восстановление. Эстетическая стоматология.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-section reveal-delay-2">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contacts">Записаться</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/services/diagnostics">Первичная диагностика</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">О клинике</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
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
            <Button asChild className="mt-8" size="lg">
              <Link to="/about">
                Узнать больше <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Doctor Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal-section">
                <img
                  src={mainDoctor.image}
                  alt={mainDoctor.name}
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="reveal-section reveal-delay-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Главный врач</h2>
                <h3 className="text-2xl font-semibold text-primary mb-2">{mainDoctor.name}</h3>
                <p className="text-lg text-muted-foreground mb-6">{mainDoctor.position}</p>
                <ul className="space-y-3 mb-8">
                  {mainDoctor.shortDescription.map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
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
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamPreview.map((member, idx) => (
              <div key={member.id} className={`reveal-section reveal-delay-${idx + 1}`}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>
          <div className="text-center reveal-section reveal-delay-4">
            <Button asChild size="lg" variant="outline">
              <Link to="/team">
                Вся команда <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр стоматологических услуг
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`reveal-section reveal-delay-${idx % 4 + 1}`}
                >
                  <div className="bg-card rounded-xl p-8 shadow-lg card-hover text-center h-full">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12 reveal-section reveal-delay-4">
            <Button asChild size="lg">
              <Link to="/services">
                Все услуги <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты</h2>
            <p className="text-xl text-muted-foreground">
              Наши работы говорят сами за себя
            </p>
          </div>
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-1">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop"
              afterImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop"
              alt="Ортопедическая реставрация"
            />
          </div>
          <div className="text-center mt-12 reveal-section reveal-delay-2">
            <Button asChild size="lg" variant="outline">
              <Link to="/before-after">
                Смотреть все работы <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы пациентов</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`bg-card rounded-xl p-8 shadow-lg reveal-section reveal-delay-${i}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {i}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Пациент {i}</div>
                    <div className="text-sm text-muted-foreground">Пациент клиники</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Отличная клиника с профессиональным подходом. Результат превзошел все ожидания. Спасибо команде BFP Concept!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша клиника</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`aspect-square overflow-hidden rounded-lg reveal-section reveal-delay-${(i % 4) + 1}`}>
                <img
                  src={`https://images.unsplash.com/photo-162917495617${i}-c8b417780e63?w=600&h=600&fit=crop`}
                  alt={`Интерьер клиники ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="reveal-section">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Контакты</h2>
                <div className="space-y-6 text-lg">
                  <div>
                    <div className="font-semibold mb-2">Адрес</div>
                    <div className="text-muted-foreground">Москва, Алтуфьевское шоссе 89А</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Телефон</div>
                    <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
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
    </div>
  );
};

export default Home;
