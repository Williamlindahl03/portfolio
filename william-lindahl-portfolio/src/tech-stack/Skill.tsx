import { useEffect } from "react";

type SkillProp = {
    logo: React.ReactNode,
    name: string
}

function Skill({logo, name}: SkillProp) {

  return (
    <div className="p-2 flex flex-row justify-start items-center gap-2 rounded-lg bg-bgSecondary overflow-hidden 
                    shadow-lg shadow-black/100 border border-bgTertiary hover:border-highlight hover:shadow-xl transition-all duration-200 cursor-pointer">
      <div className="rounded overflow-hidden">{logo}</div>
      <p className="text-strong">{name}</p>
    </div>
  )
}
export default Skill;