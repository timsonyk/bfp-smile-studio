import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";

const BeforeAfter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Все работы" },
    { id: "orthopedics", label: "Ортопедия" },
    { id: "aesthetics", label: "Эстетика" },
    { id: "surgery", label: "Хирургия" },
    { id: "hygiene", label: "Гигиена" },
  ];

  const cases = [
    {
      id: 1,
      category: "orthopedics",
      title: "Полная реконструкция улыбки",
      description: "Комплексное протезирование с восстановлением прикуса",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
    {
      id: 2,
      category: "aesthetics",
      title: "Керамические виниры",
      description: "Эстетическая коррекция формы и цвета",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
    {
      id: 3,
      category: "surgery",
      title: "Имплантация и протезирование",
      description: "Восстановление отсутствующих зубов",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
    {
      id: 4,
      category: "aesthetics",
      title: "Художественная реставрация",
      description: "Восстановление передних зубов",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
    {
      id: 5,
      category: "orthopedics",
      title: "Коронки на имплантах",
      description: "Протезирование на имплантационных системах",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
    {
      id: 6,
      category: "hygiene",
      title: "Профессиональная гигиена",
      description: "Удаление налета и отбеливание",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=900&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop",
    },
  ];

  const filteredCases = activeFilter === "all" 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6">Результаты лечения</h1>
            <p className="text-[0.9375rem] leading-relaxed sm:text-lg md:text-xl text-muted-foreground">
              Наши работы — лучшее доказательство качества и профессионализма
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full text-sm md:text-base h-9 md:h-10 px-4 md:px-5"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 md:py-20 lg:py-24 pb-20 md:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-7xl mx-auto">
            {filteredCases.map((caseItem, idx) => (
              <div key={caseItem.id} className={`reveal-section reveal-delay-${(idx % 2) + 1}`}>
                <BeforeAfterSlider
                  beforeImage={caseItem.beforeImage}
                  afterImage={caseItem.afterImage}
                  alt={caseItem.title}
                />
                <div className="mt-5 md:mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-8">Хотите такой же результат?</h2>
            <p className="text-[0.9375rem] leading-relaxed sm:text-lg md:text-xl text-muted-foreground mb-7 md:mb-8">
              Запишитесь на консультацию, и мы составим индивидуальный план лечения
            </p>
            <Button asChild size="lg" className="h-12 text-base md:text-lg px-7 md:px-8 w-full sm:w-auto">
              <a href="/contacts">Записаться на консультацию</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeforeAfter;
