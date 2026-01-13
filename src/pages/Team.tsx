import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/teamData";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-6 md:pb-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-6">Наша команда</h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
              Профессионалы с многолетним опытом и глубокими знаниями
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pt-6 md:pt-12 pb-12 md:pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className={`reveal-section reveal-delay-${(idx % 4) + 1}`}>
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center reveal-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-8">Присоединяйтесь к нашей команде</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
              Мы всегда рады талантливым специалистам, разделяющим нашу философию биофункциональной стоматологии
            </p>
            <a
              href="mailto:hr@bfpconcept.ru"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-11 px-6 md:px-8"
            >
              Отправить резюме
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
