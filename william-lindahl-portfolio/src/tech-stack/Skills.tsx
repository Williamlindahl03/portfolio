import { JavaIcon, CSharpIcon, PythonIcon, TypeScriptIcon, ReactIcon, TailwindIcon, GithubIcon, VSCodeIcon, DotNetIcon, PostgreSQLIcon } from "../svgs/svgs.tsx";
import Skill from "./Skill.tsx";


function Skills() {
    const width: string = "48";

  return (
    <div className='w-full max-w-[500px] grid grid-cols-5 gap-2 m-auto my-10'>
      <Skill name={"Java"} logo={<JavaIcon width={width} />} />
      <Skill name={"TypeScript"} logo={<TypeScriptIcon width={width} />} />
      <Skill name={"React"} logo={<ReactIcon width={width}/>} />
      <Skill name={"Tailwind"} logo={<TailwindIcon width={width}/>} />
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