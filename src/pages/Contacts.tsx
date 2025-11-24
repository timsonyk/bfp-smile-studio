import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
const Contacts = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Контакты</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="reveal-section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Как с нами связаться</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Адрес</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Москва, Алтуфьевское шоссе 89А
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

                <div className="pt-4 md:pt-6">
                  <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Мессенджеры</h3>
                  <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                    <a href="https://wa.me/74951234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-[#25D366] text-white hover:bg-[#25D366]/90 h-10 md:h-11 px-6">
                      WhatsApp
                    </a>
                    <a href="https://t.me/bfpconcept" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-[#0088cc] text-white hover:bg-[#0088cc]/90 h-10 md:h-11 px-6">
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="reveal-section reveal-delay-1">
              <div className="bg-card rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Записаться на прием</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto reveal-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Как нас найти</h2>
            <div className="aspect-video bg-muted rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A12345&amp;source=constructor" width="100%" height="100%" frameBorder="0" title="Карта"></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contacts;