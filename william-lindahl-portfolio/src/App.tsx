import React from "react";
import { useState } from 'react'
import './App.css'
import TagList from './tags/TagList'
import Projectlist from './projects/ProjectList'
import ExperienceCard from './experience/ExperienceCard'
import Socials from "./socials/Socials";

function App() {
  const skills: string[] = ["React", "Tailwind", "HTML", "CSS", "PostgreSQL", "Java", "C#", "JavaScript", "SpringBoot", "Python", "Docker", "Git"]

  return (
    <>
      <div className='w-full bg-bgPrimary flex justify-center'>
        <div className='w-[100%] max-w-[800px] px-4 flex flex-col'>

          <div className='size-full'>
            <h1 className='text-primary text-4xl font-bold'>William Lindahl</h1>
            <h2 className='text-strong'>Software Developer</h2>
            <p className='text-muted'>About me</p>
            <p className='text-muted'>Williamlindahl03@gmail.com</p>
            <p className='text-muted'>Gävleborg, Sweden</p>

            <Socials />

            <h1 className='text-primary font-bold text-3xl mt-8 mb-4'>Projects</h1>
            <Projectlist />
            <h1 className='text-primary font-bold text-3xl mt-8 mb-4'>Education</h1>
            <div className='flex flex-col [&>*:not(:last-child)]:h-32'>
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
