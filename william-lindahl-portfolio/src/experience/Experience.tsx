import ExperienceCard from "./ExperienceCard";

function Experience() {

    return(
        <div className="w-full">
            <div className="p-1 flex flex-row gap-1 bg-bgSecondary border border-bgTertiary rounded-lg 
                            *:w-[50%] *:text-primary">
                <button className="rounded-md text-primary border border-secondary bg-tertiary">Utbildning</button>
                <button>Arbete</button>
            </div>
            <div className="py-2">
                <div className="flex flex-col gap-2">
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
                        listOfTags={["Python", "OOP", "HTML", "CSS", "JavaScript", "JQuery","C#", "Arduino"]}/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
} export default Experience;