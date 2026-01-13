import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Scan, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/teamData";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";
import clinic4 from "@/assets/clinic-4.png";
import clinic5 from "@/assets/clinic-5.png";

const About = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const clinicImages = [
    { src: clinic1, alt: "Ресепшен клиники" },
    { src: clinic2, alt: "Зона ожидания" },
    { src: clinic3, alt: "Интерьер клиники" },
    { src: clinic4, alt: "Продукция для ухода" },
    { src: clinic5, alt: "Коридор клиники" },
  ];

  const principles = [
    {
      number: "01",
      title: "Диагностика",
      description: "Полный анализ зубочелюстной системы, осанки, функций ВНЧС"
    },
    {
      number: "02",
      title: "Функциональность",
      description: "Восстановление правильной работы всей системы"
    },
    {
      number: "03",
      title: "Эстетика",
      description: "Создание красивой улыбки на основе здоровой функции"
    }
  ];

  const technologies = [
    {
      icon: Microscope,
      title: "Микроскоп",
      description: "Лечение под увеличением для максимальной точности"
    },
    {
      icon: Scan,
      title: "3D-сканирование",
      description: "Цифровое моделирование и планирование лечения"
    },
    {
      icon: Camera,
      title: "Фотопротокол",
      description: "Детальная документация всех этапов лечения"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Philosophy Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto reveal-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8 text-center">Наша философия</h2>
            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground text-center">
              <p>
                BFP Concept основана в Москве как клиника биофункциональной стоматологии — направления, которое рассматривает зубочелюстную систему не изолированно, а как часть всего организма.
              </p>
              <p>
                Мы убеждены: чтобы достичь по-настоящему здоровой и красивой улыбки, необходимо сначала восстановить правильную функцию. Прикус, осанка, мышечный баланс, работа височно-нижнечелюстных суставов — всё это взаимосвязано.
              </p>
              <p>
                Наш подход начинается с глубокой диагностики. Мы используем современные технологии: 3D-сканирование, цифровую фотографию, функциональный анализ. Это позволяет увидеть полную картину и составить индивидуальный план лечения.
              </p>
              <p>
                Только восстановив функцию, мы переходим к эстетике. Такой подход обеспечивает долговременный, предсказуемый и стабильный результат.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 md:mb-12 lg:mb-16 text-center reveal-section">Принципы работы</h2>
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {principles.map((principle, idx) => (
                <div key={principle.number} className={`reveal-section reveal-delay-${idx + 1}`}>
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg h-full text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary/20 mb-3 md:mb-4">{principle.number}</div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4">{principle.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 md:mb-12 lg:mb-16 text-center reveal-section">Современные технологии</h2>
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.title} className={`reveal-section reveal-delay-${idx + 1}`}>
                    <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg card-hover text-center h-full">
                      <Icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 text-primary" />
                      <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">{tech.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8">Наша миссия</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Мы стремимся изменить представление о стоматологии — от симптоматического лечения к комплексному восстановлению здоровья зубочелюстной системы.
            </p>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed">
              Наша цель — не просто красивая улыбка, а здоровье, функция и гармония всего организма.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 md:mb-16 text-center reveal-section">Интерьеры клиники</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {clinicImages.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square overflow-hidden rounded-[10px] shadow-lg reveal-section reveal-delay-${(idx % 3) + 1} cursor-pointer`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Team Preview */}
      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-8 md:mb-16 reveal-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4">Наша команда</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
              Профессионалы, которым вы можете доверять
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className={`reveal-section reveal-delay-${idx + 1}`}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>
          <div className="text-center reveal-section">
            <Button asChild size="lg">
              <Link to="/team">
                Познакомиться с командой <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
