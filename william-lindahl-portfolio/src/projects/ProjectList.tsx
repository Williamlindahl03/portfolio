import ProjectCard from "./ProjectCard.tsx"
import AsteroidsImage from "../assets/Asteroids.jpg";
import AsteroidDemo from "../assets/AsteroidsDemo.mp4";
import KanbanImage from "../assets/KanbanApp.png";
import SVTImage from "../assets/SVTApp.png";
import SVTVideo from "/SVTAppDemo.mp4";
import StatplayImage from "../assets/Statplay.jpg";
import StatplayDemo from "../assets/StatplayDemo.mp4";
import WordleImage from "../assets/wordle.png";
import WordleDemo from "../assets/WordleDemo.mp4";

function Projectlist() {

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-auto'>
      <ProjectCard 
          image={KanbanImage}
          name={"Kanban App"} 
          type="Eget projekt"
          time="Okt 2025"
          description={"A project management application where you can create kanban boards"} 
          listOfTags={["React", "TypeScript", "Tailwind", "C#", "ASP.NET web api", "EF Core", "PostgreSQL"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard
          image={SVTImage}
          video={SVTVideo}
          name={"Project at SVT Gävleborg"} 
          type="Skolprojekt"
          time="Mar 2025"
          description={"Application for asking questions about legal documents from Acta Publica using OpenAI and RAG"} 
          listOfTags={["React", "Python", "RAG", "Tailwind",  "LangChain", "REST API", "Agile", "Scrum"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={AsteroidsImage}
          video={AsteroidDemo}
          name={"Asteroids"} 
          type="Skolprojekt"
          time="Mar 2025"
          description={"Asteroids game with focus on using relevant design patterns"} 
          listOfTags={["Java", "Swing", "MVC", "Design Patterns"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={StatplayImage}
          video={StatplayDemo}
          name={"STATPLAY"} 
          type="Skolprojekt"
          time="Dec 2024"
          description={"Hemsida med Sportstatistik från everysports API"} 
          listOfTags={["React", "JavaScript", "Bootstrap", "REST API"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={WordleImage}
          video={WordleDemo}
          name={"Wordle"} 
          type="Eget projekt"
          time="Maj 2022"
          description={"En kopia av det populära spelet Wordle, fast även med svenska ord"} 
          listOfTags={["HTML", "CSS", "JavaScript"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={"https://williamlind03.github.io/wordle_game/"}/>
      
    </div>
  )
}
export default Projectlist;