type SkillProp = {
    logo: React.ReactNode,
    name: string
}

function Skill({logo, name}: SkillProp) {

  return (
    <div className="p-2 aspect-square flex flex-col justify-center items-center gap-1 rounded-lg bg-bgSecondary overflow-hidden 
                    shadow-lg shadow-black/100 border border-bgTertiary hover:border-highlight hover:shadow-xl transition-all duration-200 cursor-pointer">
      {logo}
      <p className="text-muted">{name}</p>
    </div>
  )
}
export default Skill;