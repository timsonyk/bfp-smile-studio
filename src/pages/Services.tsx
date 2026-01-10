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
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-muted-foreground">
              Полный спектр стоматологических услуг высочайшего качества
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className={`reveal-section reveal-delay-${(idx % 3) + 1}`}
                >
                  <div className="bg-card rounded-xl p-8 shadow-lg card-hover h-full">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
                    <span className="text-primary font-medium hover:underline">
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
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Не знаете, с чего начать?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Запишитесь на первичную консультацию, и мы составим индивидуальный план лечения
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
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
