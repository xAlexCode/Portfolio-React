import type { Skill } from "../../types/types"


type SkillCardProps = {
    skill: Skill
}

const Skillcard = ({ skill }: SkillCardProps) => {
  const { image, name } = skill;

  return (
    <li className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface p-4">
      <img src={image} alt="" className="size-10" loading="lazy" />
      <span className="text-sm">{name}</span>
    </li>
  );
};

export default Skillcard