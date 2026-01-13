import { Link } from "react-router-dom";
import { Search, Crown, Scissors, Sparkles, Droplets, Activity, Smile } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/data/servicesData";

const iconMap: { [key: string]: any } = {
  Search,
  Crown,
  Scissors,
  Sparkles,
  Droplets,
  Activity,
  Smile,
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-6">Наши услуги</h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
              Полный спектр стоматологических услуг высочайшего качества
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-6 md:pt-12 pb-12 md:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className={`reveal-section reveal-delay-${(idx % 3) + 1}`}
                >
                  <div className="bg-card rounded-xl p-5 md:p-8 shadow-lg card-hover h-full text-center">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary mx-auto" />
                    <h3 className="text-lg md:text-2xl font-medium mb-2 md:mb-4">{service.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.shortDescription}</p>
                    <span className="text-sm md:text-base text-primary font-medium hover:underline">
                      Подробнее →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-8">Не знаете, с чего начать?</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
              Запишитесь на первичную консультацию, и мы составим индивидуальный план лечения
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-11 px-6 md:px-8"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
