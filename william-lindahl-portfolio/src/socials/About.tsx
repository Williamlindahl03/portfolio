import { LocationIcon, EmailIcon } from "../svgs/svgs";
import Skills from "../tech-stack/Skills";
import Socials from "./Socials";

function About() {

  return (
    <>
        <div className="flex flex-row justify-between mt-10 sm:mt-20">
            <div className=" flex flex-col gap-1">
                <h1 id="about" className='text-primary text-4xl sm:text-5xl font-bold'>William Lindahl</h1>
                <h2 className='max-w-[350px] text-xl text-muted pb-4 leading-5'>Nyexaminerad <b>Dataingenjör</b> med intresse för utveckling inom både <b>Frontend</b> och <b>Backend</b>.</h2>
                <div className="pb-4 sm:hidden">
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
            <div className="flex flex-col items-end hidden sm:block">
                <div className="flex flex-row gap-1">
                    <p className='text-muted'>Williamlindahl03@gmail.com</p>
                    <EmailIcon />
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <p className='text-muted'>Gävleborg, Sweden</p>
                    <LocationIcon />
                </div>
            </div>
        </div>
        <div className="mt-20">
            <Skills/>
        </div>
    </>
  )
}
export default About;