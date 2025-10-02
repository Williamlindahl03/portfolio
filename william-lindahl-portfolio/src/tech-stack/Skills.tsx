import { JavaIcon, CSharpIcon, PythonIcon, TypeScriptIcon, ReactIcon, TailwindIcon, GithubIcon, VSCodeIcon, DotNetIcon, PostgreSQLIcon, HTMLIcon, BootStrapIcon, CSSIcon } from "../svgs/svgs.tsx";
import Skill from "./Skill.tsx";


function Skills() {
    const width: string = "48";

  return (
    <div className='w-full h-min max-w-[600px] grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2 m-auto'>
      
      <Skill name={"Java"} logo={<JavaIcon width={width} />} />
      <Skill name={"TypeScript"} logo={<TypeScriptIcon width={width} />} />
      <Skill name={"React"} logo={<ReactIcon width={width}/>} />
      <Skill name={"Tailwind"} logo={<TailwindIcon width={width}/>} />
      <Skill name={"HTML"} logo={<HTMLIcon width={width}/>} />
      <Skill name={"CSS"} logo={<CSSIcon width={width}/>} />
      <Skill name={"Python"} logo={<PythonIcon width={width} />} />
      <Skill name={"C#"} logo={<CSharpIcon width={width} />} />
      <Skill name={".NET"} logo={<DotNetIcon width={width}/>} />
      <Skill name={"PostgreSQL"} logo={<PostgreSQLIcon width={width}/>} />
      <Skill name={"Github"} logo={<GithubIcon width={width}/>} />
      <Skill name={"VS Code"} logo={<VSCodeIcon width={width}/>} />
    </div>
  )
}
export default Skills;