import ProjectCard from "./ProjectCard.tsx"
import AsteroidsImage from "../assets/Asteroids.jpg";
import KanbanImage from "../assets/KanbanApp.png";


function Projectlist() {

  return (
    <div className='w-full p-2 grid grid-cols-2 gap-4 m-auto'>
      <ProjectCard 
          image={KanbanImage}
          name={"Kanban App"} 
          description={"A project management application where you can create kanban boards"} 
          listOfTags={["React", "Tailwind", "C#", "PostgreSQL", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          name={"ChessGPT"} 
          description={"A website where you can challenge different popular generative AIs in a game of chess"} 
          listOfTags={["React", "Tailwind"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          name={"Project at SVT Gävleborg"} 
          description={"Application for asking questions about legal documents from Acta Publica using OpenAI and RAG"} 
          listOfTags={["React", "Python", "RAG","Tailwind",  "LangChain", "RestAPI"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
      <ProjectCard 
          image={AsteroidsImage}
          name={"Asteroids"} 
          description={"Asteroids game with focus on using relevant design patterns"} 
          listOfTags={["Java", "Swing", "MVC", "Design Patterns"]} 
          linkToCode={"https://github.com/Williamlindahl03"}
          linkToDemo={""}/>
    </div>
  )
}
export default Projectlist;