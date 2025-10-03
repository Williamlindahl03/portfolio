import { LocationIcon, EmailIcon } from "../svgs/svgs";
import Skills from "../tech-stack/Skills";
import Socials from "./Socials";
import profile from "../assets/profil.jpg"

function About() {

  return (
    <>
        <div id="about" className="flex flex-row-reverse flex-wrap item-left justify-end mt-10 sm:mt-20">
            <div className="flex flex-col items-end">
                <img className="h-[215px] rounded-full rotate-y-180 p-1 mb-4 border border-muted" src={profile}/> 
            </div>
            <div className="flex flex-col gap-1 grow & > *">
                <h1 className='text-primary text-5xl sm:text-5xl font-bold'>William Lindahl</h1>
                <h2 className='max-w-[400px] text-lg leading-5 text-muted pb-4 [&_b]:text-strong'>
                    Nyexaminerad <b>Dataingenjör</b> med intresse för utveckling inom
                    både <b>Frontend</b> och <b>Backend</b>.
                </h2>
                <div className="pb-4 flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                        <EmailIcon />
                        <p className='text-muted'>Williamlindahl03@gmail.com</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <LocationIcon />
                        <p className='text-muted'>Gävleborg, Sweden</p>
                    </div>
                </div>
                <Socials />
            </div>
            
        </div>
        <div className="mt-20">
            <Skills/>
        </div>
    </>
  )
}
export default About;