import React from "react";
import { useState } from 'react'
import './App.css'
import TagList from './tags/TagList'
import Projectlist from './projects/ProjectList'
import ExperienceCard from './experience/ExperienceCard'
import Socials from "./socials/Socials";
import About from "./socials/About";
import Skills from "./tech-stack/Skills";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Experience from "./experience/Experience";

function App() {
  const skills: string[] = ["React", "Tailwind", "HTML", "CSS", "PostgreSQL", "Java", "C#", "JavaScript", "SpringBoot", "Python", "Docker", "Git"]

  return (
    <>
      <div className='w-full bg-bgPrimary flex justify-center'>
        <div className='w-[100%] max-w-[800px] px-4 flex flex-col'>

          <div id="page" className='size-full'>
            <Header />
            <About />

            <div id="projects">
              <h1 className='text-primary font-bold text-3xl mt-20 mb-4'>Projekt</h1>
              <Projectlist />
            </div>

            <div id="experience">
              <h1 className='text-primary font-bold text-3xl mt-20 mb-4'>Erfarenhet</h1>
              <Experience/>
              {/* <div className='flex flex-col [&>*:not(:last-child)]:h-32'>
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
              </div> */}
              
              <h1 className='text-primary font-bold text-3xl mt-20 mb-4'>Work Experience</h1>
              <ExperienceCard 
                  name={"Brevbärare, PostNord"} 
                  timePeriod='2023 - 2024'
                  location='Sanviken'
                  description={"bachealors degree in computer engineering with focus on java programming"}
                  listOfTags={[]}/>
            </div>
            
            <Footer />
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
