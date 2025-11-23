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
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Результаты лечения</h1>
            <p className="text-xl text-muted-foreground">
              Наши работы — лучшее доказательство качества и профессионализма
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {filteredCases.map((caseItem, idx) => (
              <div key={caseItem.id} className={`reveal-section reveal-delay-${(idx % 2) + 1}`}>
                <BeforeAfterSlider
                  beforeImage={caseItem.beforeImage}
                  afterImage={caseItem.afterImage}
                  alt={caseItem.title}
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Хотите такой же результат?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Запишитесь на консультацию, и мы составим индивидуальный план лечения
            </p>
            <Button asChild size="lg" className="text-lg px-8">
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
