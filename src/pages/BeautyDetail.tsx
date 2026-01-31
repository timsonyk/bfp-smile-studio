import { useParams, Link, Navigate } from "react-router-dom";
import { PenTool, ArrowLeft, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { beautyServices } from "@/data/categoryData";

const BeautyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = beautyServices.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/beauty" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
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
                  <Link to="/beauty" className="hover:text-foreground transition-colors">
                    Красота
                  </Link>
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li className="text-foreground">{service.title}</li>
              </ol>
            </nav>

            {/* Заголовок */}
            <div className="flex items-start gap-4 mb-6 animation-init animate-fade-in-up">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(35 65% 55%) 0%, hsl(25 70% 50%) 100%)" }}
              >
                <PenTool className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium" style={{ color: "hsl(25 50% 25%)" }}>
                {service.pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Видео */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div
                className="relative rounded-2xl overflow-hidden aspect-video"
                style={{
                  background: "linear-gradient(135deg, hsl(35 40% 94%) 0%, hsl(30 45% 92%) 100%)"
                }}
              >
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
                  <div className="text-center">
                    <PenTool className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: "hsl(35 60% 50%)" }} />
                    <p className="text-sm text-muted-foreground/50">Видео скоро появится</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={100}>
              <div
                className="rounded-2xl p-8 md:p-12"
                style={{
                  background: "linear-gradient(135deg, hsl(35 35% 97%) 0%, hsl(30 40% 95%) 100%)",
                  border: "1px solid hsl(35 25% 92%)"
                }}
              >
                <h2 className="text-xl md:text-2xl font-medium mb-6" style={{ color: "hsl(25 40% 28%)" }}>
                  О процедуре
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.content}
                  </p>
                  <p className="text-muted-foreground/70 leading-relaxed">
                    Запишитесь на консультацию, чтобы мы могли оценить вашу ситуацию и предложить оптимальное решение.
                    Мы создадим естественную красивую улыбку, которая будет гармонировать с вашим лицом.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={200}>
              <div
                className="rounded-2xl p-8 md:p-12 text-center"
                style={{ background: "linear-gradient(135deg, hsl(35 65% 55%) 0%, hsl(25 70% 50%) 100%)" }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                  Записаться на консультацию
                </h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  Создадим улыбку вашей мечты. Позвоните или оставьте заявку.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href="tel:+74951200188"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[hsl(25_60%_35%)] font-medium rounded-lg hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +7 (495) 120-01-88
                  </a>
                  <a
                    href="https://t.me/bfsclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
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
                  to="/beauty"
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

export default BeautyDetail;
