import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingContacts from "@/components/BookingContacts";
const Contacts = () => {
  return <div className="min-h-screen">
      <SEO
        title="Контакты"
        canonical="/contacts"
        description="Контакты стоматологии BFP Concept. Адрес: Москва, Дербеневская набережная 1/2. Телефон: +7 (495) 120-01-88. Запись по телефону и в мессенджерах."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6">Контакты</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Booking */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="reveal-section text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">Как с нами связаться</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Адрес</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Москва, Дербеневская набережная, 1/2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Телефон</h3>
                    <a className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors" href="tel:+74951200188">
                      +7 (495) 120-01-88
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Email</h3>
                    <a href="mailto:info@bfpconcept.ru" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                      info@bfpconcept.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Часы работы</h3>
                    <div className="text-sm md:text-base text-muted-foreground space-y-1">
                      <p>Ежедневно: 9:00 - 21:00</p>
                      
                      
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Booking */}
            <div className="reveal-section reveal-delay-1">
              <div className="bg-card rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-center">Записаться на прием</h2>
                <BookingContacts />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto reveal-section">
            <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-center">Как нас найти</h2>
            <a
              href="https://yandex.ru/maps/213/moscow/?ll=37.653864%2C55.727389&mode=poi&poi%5Bpoint%5D=37.653688%2C55.727475&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1026128887&z=18.21"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-muted rounded-xl md:rounded-2xl overflow-hidden shadow-xl relative group"
            >
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.653688%2C55.727475&z=17&pt=37.653688,55.727475,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта BFP Concept"
                className="pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                  Открыть в Яндекс Картах
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contacts;