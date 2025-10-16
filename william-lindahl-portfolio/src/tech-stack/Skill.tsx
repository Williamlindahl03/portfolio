
type SkillProp = {
    logo: React.ReactNode,
    name: string
}

function Skill({logo, name}: SkillProp) {

  return (
    <div className="p-2 flex flex-row justify-start items-center gap-2 rounded-lg bg-bgSecondary overflow-hidden 
                    shadow-lg shadow-black/100 border border-bgTertiary hover:border-highlight hover:bg-neutral-800 hover:shadow-xl transition-all duration-200">
      <div className="rounded overflow-hidden">{logo}</div>
      <p className="text-muted">{name}</p>
    </div>
  )
}
export default Skill;