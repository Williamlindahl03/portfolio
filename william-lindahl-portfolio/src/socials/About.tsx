import { LocationIcon, EmailIcon } from "../svgs/svgs";
import Socials from "./Socials";

function About() {

  return (
    <div id="about" className="flex flex-row justify-between">
        <div className="max-w-[350px]">
            <h1 className='text-primary text-4xl font-bold'>William Lindahl</h1>
            <p className='text-strong pb-2 leading-5'>Nyexaminerad <b>Dataingenjör</b> med intresse för både <b>Frontend</b> och <b>Backend</b>.</p>
            <Socials />
        </div>
        <div className="flex flex-col items-end">
            <div className="flex flex-row gap-2">
                <p className='text-muted'>Williamlindahl03@gmail.com</p>
                <EmailIcon />
            </div>
            <div className="flex flex-row gap-2">
                <p className='text-muted'>Gävleborg, Sweden</p>
                <LocationIcon />
            </div>
        </div>
    </div>
  )
}
export default About;