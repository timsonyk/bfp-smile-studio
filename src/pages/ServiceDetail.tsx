import { useParams, Navigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumbs */}
      <section className="pt-20 md:pt-32 pb-6 md:pb-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary transition-colors whitespace-nowrap">Главная</Link>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link to="/services" className="hover:text-primary transition-colors whitespace-nowrap">Услуги</Link>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-foreground truncate">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6">{service.title}</h1>
            <p className="text-[0.9375rem] leading-relaxed sm:text-lg md:text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto reveal-section">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">Этапы лечения</h2>
            
            {/* Desktop version */}
            <div className="hidden sm:block space-y-5 md:space-y-6">
              {service.stages.map((stage, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg pt-1">{stage}</p>
                </div>
              ))}
            </div>

            {/* Mobile version - Accordion */}
            <Accordion type="single" collapsible className="sm:hidden space-y-3">
              {service.stages.map((stage, idx) => (
                <AccordionItem key={idx} value={`stage-${idx}`} className="bg-card rounded-xl shadow-lg border-0">
                  <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span>Этап {idx + 1}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {stage}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">Преимущества</h2>
            
            {/* Desktop version */}
            <div className="hidden sm:grid md:grid-cols-2 gap-5 md:gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-card rounded-xl p-6 shadow-lg">
                  <span className="text-primary text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mobile version - Accordion */}
            <Accordion type="single" collapsible className="sm:hidden space-y-3">
              {service.benefits.map((benefit, idx) => (
                <AccordionItem key={idx} value={`benefit-${idx}`} className="bg-card rounded-xl shadow-lg border-0">
                  <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold hover:no-underline">
                    <span className="flex items-center gap-2.5">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <span className="line-clamp-2">Преимущество {idx + 1}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {benefit}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">Показания</h2>
            
            {/* Desktop version */}
            <div className="hidden sm:grid md:grid-cols-2 gap-4 md:gap-5">
              {service.indications.map((indication, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-card rounded-xl p-6 shadow-lg">
                  <span className="text-primary mr-2 flex-shrink-0">•</span>
                  <span className="text-lg">{indication}</span>
                </div>
              ))}
            </div>

            {/* Mobile version - Compact list */}
            <div className="sm:hidden bg-card rounded-xl p-5 shadow-lg space-y-3.5">
              {service.indications.map((indication, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  <span className="text-[0.9375rem] leading-relaxed">{indication}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto reveal-section reveal-delay-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {service.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-xl px-5 sm:px-6 shadow-lg border-0">
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 sm:py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.9375rem] sm:text-base leading-relaxed text-muted-foreground pb-4 sm:pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto reveal-section reveal-delay-4">
            <div className="bg-card rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Записаться на прием</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Button for Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-2xl animate-fade-in">
        <Link to="/contacts">
          <button className="w-full h-14 bg-primary text-primary-foreground rounded-xl font-semibold text-base shadow-lg active:scale-[0.98] transition-transform">
            Записаться на прием
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
