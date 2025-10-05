import ProjectCard from "./ProjectCard.tsx"
import AsteroidsImage from "../assets/Asteroids.jpg";
import KanbanImage from "../assets/KanbanApp.png";
import SVTImage from "../assets/SVTApp.png";
import SVTVideo from "/SVTAppDemo.mp4";
import StatplayImage from "../assets/Statplay.jpg";
import WordleImage from "../assets/wordle.png";
import ProjectDemoModal from "./ProjectDemoModal.tsx";


function Projectlist() {

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-auto'>
      <ProjectCard 
          image={KanbanImage}
          name={"Kanban App"} 
          type="Eget projekt"
          time="Okt 2025"
          description={"A project management application where you can create kanban boards"} 
          listOfTags={["React", "Tailwind", "C#", "PostgreSQL", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard
          image={SVTImage}
          video={SVTVideo}
          name={"Project at SVT Gävleborg"} 
          type="Skolprojekt"
          time="Mar 2025"
          description={"Application for asking questions about legal documents from Acta Publica using OpenAI and RAG"} 
          listOfTags={["React", "Python", "RAG","Tailwind",  "LangChain", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={AsteroidsImage}
          name={"Asteroids"} 
          type="Skolprojekt"
          time="Mar 2025"
          description={"Asteroids game with focus on using relevant design patterns"} 
          listOfTags={["Java", "Swing", "MVC", "Design Patterns"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={StatplayImage}
          name={"Statplay"} 
          type="Skolprojekt"
          time="Dec 2024"
          description={"Hemsida med Sportstatistik"} 
          listOfTags={["React", "JavaScript", "Bootstrap", "REST API"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={WordleImage}
          name={"Wordle"} 
          type="Eget projekt"
          time="Maj 2022"
          description={"Hemsida med Sportstatistik"} 
          listOfTags={["HTML", "CSS", "JavaScript"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={"https://williamlind03.github.io/wordle_game/"}/>
      
    </div>
  )
}
export default Projectlist;