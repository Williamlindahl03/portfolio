import ExperienceCard from "./ExperienceCard";
import HiGLogo from "../assets/hig-logo.png";
import BessemerLogo from "../assets/bessemer-logo.jpg";
import PostNordLogo from "../assets/postnord-logo.png";
import HogboBrukLogo from "../assets/hogbo-bruk-logo.png"
import { useState } from "react";

function Experience() {

    const [showEducation, setShowEducation] = useState(true);

    return(
        <div className="w-full h-[750px] sm:h-[600px]">
            <div className="p-1 flex flex-row gap-1 bg-bgSecondary border border-bgTertiary rounded-lg 
                            *:w-[50%] *:cursor-pointer *:rounded-md *:hover:text-strong *:border *:transition-all *:duration-300">
                <button onClick={() => setShowEducation(true)} 
                    className={`${showEducation ? "text-primary border-secondary bg-tertiary":"border-bgSecondary text-muted"}`}>Utbildning</button>
                <button onClick={() => setShowEducation(false)}
                    className={`${!showEducation ? "text-primary border-secondary bg-tertiary":"border-bgSecondary text-muted"}`}>Arbete</button>
            </div>
            <div className="py-2">
                {showEducation ? 
                <div className="flex flex-col gap-2">
                    <ExperienceCard 
                        name={"Dataingenjörsprogrammet, Högskolan i Gävle"} 
                        logoImgSrc={HiGLogo}
                        timePeriod='Aug 2022 - Jun 2025'
                        description={"kandidatexamen från dataingenjörsprogrammet på Högskolan i Gävle med fokus på systemutveckling, främst i Java."}
                        listOfTags={["Java", "OOP", "Spring boot", "React", "Git", "HTML","CSS", "Javascript"]}/>
                    
                    <ExperienceCard 
                        name={"Introduction to Machine Learning"} 
                        logoImgSrc={HiGLogo}
                        timePeriod='Aug 2024 - Jan 2025'
                        description={"Introkurs inom Maskininlärning på Högskolan i Gävle"}
                        listOfTags={["Maskininlärning", "Neural networks", "Transformers", "Python"]}/>
                    
                    <ExperienceCard 
                        name={"Teknikprogrammet, Bessemerskolan"} 
                        logoImgSrc={BessemerLogo}
                        timePeriod='Aug 2019 - Jun 2022'
                        description={"Tog examen från Teknikprogrammet med inriktning Informationsteknik"}
                        listOfTags={["Python", "OOP", "HTML", "CSS", "JavaScript", "JQuery","C#", "Arduino"]}/>
                </div>
                :
                <div className="flex flex-col gap-2">
                    <ExperienceCard 
                        name={"Brevbärare, PostNord"} 
                        logoImgSrc={PostNordLogo}
                        timePeriod='Jun 2023 - Aug 2024'
                        description={"Sommarjobbade två år som Brevbärare på PostNord i Sandviken och jobbade även extra där emellan under studierna. Jobbade mycket självständigt och under stress."}
                        listOfTags={[]}/>
                    <ExperienceCard 
                        name={"Parkarbetare, Högbo bruk"} 
                        logoImgSrc={HogboBrukLogo}
                        timePeriod='Jun 2022 - juli 2022'
                        description={"Sommarjobbade som parkarbetare vid Högbo bruk, klippte gräs, trimmade och krattade."}
                        listOfTags={[]}/>
                </div>}
            </div>
        </div>
    );
} export default Experience;