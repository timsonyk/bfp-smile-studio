import { Link } from "react-router-dom";
import { PenTool, ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { beautyServices } from "@/data/categoryData";

const Beauty = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Хлебные крошки */}
            <nav className="mb-8 animation-init animate-fade-in" aria-label="Навигация">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Главная
                  </Link>
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li className="text-foreground">Красота</li>
              </ol>
            </nav>

            {/* Заголовок */}
            <div className="flex items-center gap-4 mb-6 animation-init animate-fade-in-up">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(35 65% 55%) 0%, hsl(25 70% 50%) 100%)" }}
              >
                <PenTool className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium" style={{ color: "hsl(25 50% 25%)" }}>
                Красота
              </h1>
            </div>

            <p className="text-lg text-muted-foreground mb-4 animation-init animate-fade-in-up animation-delay-100">
              Эстетика и идеальная улыбка
            </p>

            <p className="text-muted-foreground/70 max-w-2xl animation-init animate-fade-in-up animation-delay-200">
              Выберите, что вы хотите улучшить. Мы поможем создать улыбку вашей мечты.
            </p>
          </div>
        </div>
      </section>

      {/* Сетка карточек */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {beautyServices.map((service, idx) => (
                <ScrollAnimation key={service.slug} delay={idx * 50} animation="scale">
                  <Link
                    to={`/beauty/${service.slug}`}
                    className="group block rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, hsl(35 40% 96%) 0%, hsl(30 45% 94%) 100%)",
                      border: "1px solid hsl(35 30% 90%)"
                    }}
                  >
                    <h3
                      className="text-lg font-medium mb-2 group-hover:text-[hsl(35_60%_40%)] transition-colors"
                      style={{ color: "hsl(25 40% 30%)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.shortDescription}
                    </p>
                    <div
                      className="inline-flex items-center text-sm font-medium transition-colors"
                      style={{ color: "hsl(35 60% 45%)" }}
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>

            {/* Кнопка назад */}
            <ScrollAnimation delay={300}>
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

export default Beauty;
