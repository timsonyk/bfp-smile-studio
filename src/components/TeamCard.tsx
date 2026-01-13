import { Link } from "react-router-dom";
import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block">
      <div className="overflow-hidden card-hover">
        <div className="aspect-[3/4] overflow-hidden mb-4 rounded-2xl img-shadow">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center img-zoom"
          />
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-base font-medium mb-1 group-hover:text-muted-foreground transition-colors">
            {member.name}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            {member.position}
          </p>
          <p className="text-xs text-primary mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
            Подробнее →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
