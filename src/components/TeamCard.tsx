import { Link } from "react-router-dom";
import { TeamMember } from "@/data/teamData";
import { Button } from "./ui/button";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block">
      <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-lg team-card-hover">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 sm:p-6 md:p-7">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
          <p className="text-sm sm:text-base text-primary font-semibold mb-4 sm:mb-5">{member.position}</p>
          <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
            {member.shortDescription.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base text-muted-foreground flex items-start leading-relaxed">
                <span className="text-primary mr-2 sm:mr-3 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button 
            variant="outline" 
            className="w-full h-11 sm:h-12 text-base opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
