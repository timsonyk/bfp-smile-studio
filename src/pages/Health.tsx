import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { healthServices } from "@/data/categoryData";

import katanImg from "@/assets/katan.jpg";

const Health = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero — полноэкранный с фоновым изображением */}
      <section className="min-h-[70vh] md:min-h-[80vh] relative flex items-start overflow-hidden">
        {/* Фоновое изображение катаны */}
        <img
          src={katanImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Градиентный оверлей слева для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-32 md:pt-40">
          <div className="max-w-4xl">
            {/* Хлебные крошки */}
            <nav className="mb-6 animation-init animate-fade-in" aria-label="Навигация">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Главная
                  </Link>
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li className="text-foreground">Здоровье</li>
              </ol>
            </nav>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 animation-init animate-fade-in-up">
              Здоровье
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animation-init animate-fade-in-up animation-delay-100">
              Лечение и избавление от боли
            </p>

            <p className="text-muted-foreground max-w-xl animation-init animate-fade-in-up animation-delay-200">
              Выберите проблему, которая вас беспокоит. Мы расскажем о причинах и методах лечения.
            </p>
          </div>
        </div>
      </section>

      {/* Сетка карточек */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {healthServices.map((service, idx) => (
                <ScrollAnimation key={service.slug} delay={idx * 50} animation="scale">
                  <Link
                    to={`/health/${service.slug}`}
                    className="group block rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-secondary border border-border"
                  >
                    <h3 className="text-lg font-medium mb-2 group-hover:text-foreground/70 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>

            {/* Кнопка назад */}
            <ScrollAnimation delay={500}>
              <div className="mt-12 text-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Вернуться на главную
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
