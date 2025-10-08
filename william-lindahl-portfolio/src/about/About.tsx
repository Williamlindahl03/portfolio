import { LocationIcon, EmailIcon } from "../svgs/svgs";
import Skills from "../tech-stack/Skills";
import Socials from "./Socials";
import profile from "../assets/profil.jpg"

function About() {

  return (
    <>
        <div id="about" className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center gap-4 flex-nowrap item-left mt-10 sm:mt-40">
            <div className="flex flex-col items-end">
                <img className="size-[170px] rounded-full grow rota2te-y-180 p-1 m-2 border border-muted" src={profile}/> 
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-primary text-5xl sm:text-5xl font-bold'>William Lindahl</h1>
                <a className='text-muted flex flex-row gap-1 items-center group' href="https://www.google.com/maps/place/Sandviken/@60.6188383,16.7308793,8606m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465e02576d1ea80d:0x65dac688d0eb8b6d!8m2!3d60.621607!4d16.7759179!16s%2Fm%2F02rlw1q?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" >
                        <LocationIcon /><p className='text-muted group-hover:text-strong'>Sandviken, Gävleborg</p>
                    </a>
                <h2 className='text-lg max-w-[350px] sm:max-w-[500px] text-muted leading-6 [&_b]:text-strong'>
                    Nyexaminerad <b>Dataingenjör</b> med intresse för utveckling inom
                    både <b>Frontend</b> och <b>Backend</b>.
                </h2>
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