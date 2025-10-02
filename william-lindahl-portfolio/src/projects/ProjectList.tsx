import ProjectCard from "./ProjectCard.tsx"
import AsteroidsImage from "../assets/Asteroids.jpg";
import KanbanImage from "../assets/KanbanApp.png";
import SVTImage from "../assets/SVTApp.png";
import StatplayImage from "../assets/Statplay.jpg";


function Projectlist() {

  return (
    <div className='w-full grid grid-cols-2 gap-4 m-auto'>
      <ProjectCard 
          image={KanbanImage}
          name={"Kanban App"} 
          type="Personal"
          description={"A project management application where you can create kanban boards"} 
          listOfTags={["React", "Tailwind", "C#", "PostgreSQL", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard
          image={SVTImage}
          name={"Project at SVT Gävleborg"} 
          type="School"
          description={"Application for asking questions about legal documents from Acta Publica using OpenAI and RAG"} 
          listOfTags={["React", "Python", "RAG","Tailwind",  "LangChain", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={AsteroidsImage}
          name={"Asteroids"} 
          type="School"
          description={"Asteroids game with focus on using relevant design patterns"} 
          listOfTags={["Java", "Swing", "MVC", "Design Patterns"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={StatplayImage}
          name={"Statplay"} 
          type="School"
          description={"Hemsida med Sportstatistik"} 
          listOfTags={["React", "JavaScript", "Bootstrap", "REST APIs"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
    </div>
  )
}
export default Projectlist;