import { GithubIcon, LinkedInIcon } from "../svgs/svgs";

function Socials() {

  return (
    <div className="flex flex-row gap-2">
      <a target="_blank" href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
        <LinkedInIcon />
      </a>
      <a target="_blank" href='https://github.com/Williamlindahl03?tab=repositories'>
        <GithubIcon />
      </a>
    </div>
  )
}
export default Socials;