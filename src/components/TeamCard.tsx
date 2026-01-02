import { Link } from "react-router-dom";
import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden mb-4 rounded-2xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-medium mb-1 group-hover:text-muted-foreground transition-colors">
            {member.name}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            {member.position}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
