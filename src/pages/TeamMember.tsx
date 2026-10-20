import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingContacts from "@/components/BookingContacts";
import { teamMembers } from "@/data/teamData";

const TeamMember = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={member.name}
        canonical={`/team/${member.slug}`}
        description={`${member.name} — ${member.position}. Стоматолог клиники BFP Concept в Москве. Запись на приём онлайн.`}
      />
      <Navigation />

      <section className="pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Photo */}
              <div className="reveal-section w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover object-center rounded-xl md:rounded-2xl shadow-2xl"
                />
              </div>

              {/* Info */}
              <div className="reveal-section reveal-delay-1 w-full text-center md:text-left">
                <h1 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4">{member.name}</h1>
                <p className="text-lg sm:text-xl text-primary font-semibold mb-6 md:mb-8">{member.position}</p>

                <div className="mb-6 md:mb-8">
                  <ul className="space-y-3">
                    {member.fullDescription.map((item, idx) => (
                      <li key={idx} className="flex items-start text-[0.9375rem] sm:text-base md:text-lg leading-relaxed">
                        <span className="text-primary mr-2.5 md:mr-3 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mt-16 md:mt-20 lg:mt-24 reveal-section reveal-delay-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 text-center">Сертификаты</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-secondary rounded-xl flex items-center justify-center">
                    <span className="text-sm md:text-base text-muted-foreground">Сертификат {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="mt-16 md:mt-20 lg:mt-24 reveal-section reveal-delay-3">
              <div className="bg-card rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-center">Записаться на прием</h2>
                <BookingContacts />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMember;
