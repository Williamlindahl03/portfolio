import { useState } from 'react'
import './App.css'
import TagList from './tags/TagList'
import Projectlist from './projects/ProjectList'
import ExperienceCard from './experience/ExperienceCard'

function App() {
  const skills: string[] = ["React", "Tailwind", "HTML", "CSS", "PostgreSQL", "Java", "C#", "JavaScript", "SpringBoot", "Python", "Docker", "Git"]

  return (
    <>
      <div className='w-full bg-bgPrimary flex justify-center'>
        <div className='w-[100%] max-w-[700px] flex flex-col'>

          <div className='size-full'>
            <h1 className='text-primary text-4xl font-bold'>William Lindahl</h1>
            <h2 className='text-strong'>Software Developer</h2>
            <p className='text-muted'>About me</p>

            <a href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
              <svg xmlns="http://www.w3.org/2000/svg" className='rounded' width="24" height="24" fill="--highlight" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
              <svg xmlns="http://www.w3.org/2000/svg" className='rounded' width="24" height="24" fill="--highlight" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>

            <h1 className='text-primary font-bold text-3xl mt-8 mb-4'>Projects</h1>
            <Projectlist />
            <h1 className='text-primary font-bold text-3xl mt-8 mb-4'>Studies</h1>
            <div className='flex flex-col gap-4'>
              <ExperienceCard 
                name={"University of Gävle"} 
                timePeriod='2022 - 2025'
                description={"bachealors degree in computer engineering with focus on java programming"}
                listOfTags={["Java", "OOP", "Spring boot", "React", "Git", "HTML","CSS", "Javascript"]}/>
              
              <ExperienceCard 
                  name={"Introduction to Machine Learning"} 
                  timePeriod='2023 - 2024'
                  description={"Intro course to machine learning at University of Gävle"}
                  listOfTags={["Machine learning", "GPT"]}/>
              
              <ExperienceCard 
                  name={"Bessemerskolan"} 
                  timePeriod='2019 - 2022'
                  description={"bachealors degree in computer engineering with focus on java programming"}
                  listOfTags={["Python", "OOP", "HTML", "CSS", "JavaScript", "JQuery","C#"]}/>
            </div>
            
            <h1 className='text-primary font-bold text-3xl mt-8 mb-4'>Work Experience</h1>
            <ExperienceCard 
                name={"Brevbärare, PostNord"} 
                timePeriod='2023 - 2024'
                location='Sanviken'
                description={"bachealors degree in computer engineering with focus on java programming"}
                listOfTags={[]}/>
            
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
