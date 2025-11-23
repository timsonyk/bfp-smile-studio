import { Link } from "react-router-dom";
import { TeamMember } from "@/data/teamData";
import { Button } from "./ui/button";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden shadow-lg team-card-hover">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="text-sm text-primary font-medium mb-4">{member.position}</p>
          <ul className="space-y-2 mb-6">
            {member.shortDescription.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
            Подробнее
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
