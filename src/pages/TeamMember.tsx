import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { teamMembers } from "@/data/teamData";

const TeamMember = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

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
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Info */}
              <div className="reveal-section reveal-delay-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
                <p className="text-xl text-primary font-semibold mb-8">{member.position}</p>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Опыт</h2>
                  <p className="text-lg">{member.experience}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Специализация</h2>
                  <ul className="space-y-3">
                    {member.fullDescription.map((item, idx) => (
                      <li key={idx} className="flex items-start text-lg">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mt-24 reveal-section reveal-delay-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Сертификаты</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-secondary/30 rounded-xl flex items-center justify-center">
                    <span className="text-muted-foreground">Сертификат {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="mt-24 reveal-section reveal-delay-3">
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

export default TeamMember;
