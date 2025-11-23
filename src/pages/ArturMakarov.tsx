import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { teamMembers } from "@/data/teamData";

const ArturMakarov = () => {
  const doctor = teamMembers[0];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Photo */}
              <div className="reveal-section">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Info */}
              <div className="reveal-section reveal-delay-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{doctor.name}</h1>
                <p className="text-xl text-primary font-semibold mb-2">{doctor.position}</p>
                <p className="text-lg text-muted-foreground mb-8">Основатель концепции BFP</p>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Опыт</h2>
                  <p className="text-lg">{doctor.experience}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Специализация</h2>
                  <ul className="space-y-3">
                    {doctor.fullDescription.map((item, idx) => (
                      <li key={idx} className="flex items-start text-lg">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div className="mt-24 reveal-section reveal-delay-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Подход к лечению</h2>
              <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Артур Макаров — врач-стоматолог с опытом работы с 1995 года, основатель концепции BFP (Bio-Functional Philosophy) — биофункционального подхода в стоматологии.
                  </p>
                  <p>
                    Его философия основана на глубоком понимании взаимосвязи зубочелюстной системы с осанкой, мышечным балансом и общим состоянием организма. Артур считает, что настоящее здоровье полости рта невозможно без восстановления правильной функции всей системы.
                  </p>
                  <p>
                    В своей работе он использует комплексный подход: начинает с детальной структурной диагностики, включающей анализ осанки, функций ВНЧС, 3D-сканирование и полный фотопротокол. На основе собранных данных составляется индивидуальный план лечения с привлечением смежных специалистов.
                  </p>
                  <p>
                    Результат работы Артура Макарова — не просто красивая улыбка, а гармония функции и эстетики, здоровье и долговечность.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mt-24 reveal-section reveal-delay-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Сертификаты и награды</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-secondary/30 rounded-xl flex items-center justify-center">
                    <span className="text-muted-foreground">Сертификат {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="mt-24 reveal-section reveal-delay-4">
              <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Записаться на прием</h2>
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

export default ArturMakarov;
