import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { healthServices } from "@/data/categoryData";

import katanImg from "@/assets/katan.jpg";

const HealthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = healthServices.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/health" replace />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Фоновое изображение катаны на всю страницу */}
      <img
        src={katanImg}
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Хлебные крошки */}
            <nav className="mb-8 animation-init animate-fade-in" aria-label="Навигация">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Главная
                  </Link>
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li>
                  <Link to="/health" className="hover:text-foreground transition-colors">
                    Здоровье
                  </Link>
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li className="text-foreground">{service.title}</li>
              </ol>
            </nav>

            {/* Заголовок */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 animation-init animate-fade-in-up">
              {service.pageTitle}
            </h1>

            <p className="text-lg text-muted-foreground animation-init animate-fade-in-up animation-delay-100">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Видео */}
      <section className="pb-12 md:pb-16 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary border border-border">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster=""
                  preload="metadata"
                >
                  <source src={service.videoPath} type="video/mp4" />
                  <source src={service.videoPath.replace('.mp4', '.webm')} type="video/webm" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>

                {/* Плейсхолдер, если видео не загружено */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-sm text-muted-foreground/50">Видео скоро появится</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="pb-12 md:pb-16 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={100}>
              <div className="rounded-2xl p-8 md:p-12 bg-background/80 backdrop-blur-sm border border-border">
                <h2 className="text-xl md:text-2xl font-medium mb-6">
                  О проблеме и решении
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.content}
                  </p>
                  <p className="text-muted-foreground/70 leading-relaxed">
                    Запишитесь на консультацию, чтобы мы могли провести диагностику и составить индивидуальный план лечения.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={200}>
              <div className="rounded-2xl p-8 md:p-12 text-center bg-foreground">
                <h3 className="text-xl md:text-2xl font-medium text-background mb-4">
                  Записаться на консультацию
                </h3>
                <p className="text-background/70 mb-8 max-w-md mx-auto">
                  Мы поможем решить вашу проблему
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href="tel:+74951200188"
                    className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +7 (495) 120-01-88
                  </a>
                  <a
                    href="https://t.me/bfsclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-background/30 text-background font-medium rounded-lg hover:bg-background/10 transition-colors"
                  >
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Навигация */}
            <ScrollAnimation delay={300}>
              <div className="mt-12 text-center">
                <Link
                  to="/health"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад к списку
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

export default HealthDetail;
