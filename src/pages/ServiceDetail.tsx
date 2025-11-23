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
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Этапы лечения</h2>
            <div className="space-y-6">
              {service.stages.map((stage, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg pt-1">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Преимущества</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-card rounded-xl p-6 shadow-lg">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto reveal-section reveal-delay-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Показания</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.indications.map((indication, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-card rounded-xl p-6 shadow-lg">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-lg">{indication}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto reveal-section reveal-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-xl px-6 shadow-lg border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto reveal-section reveal-delay-4">
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Записаться на прием</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
