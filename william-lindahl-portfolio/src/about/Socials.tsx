import { DownloadIcon, EmailIcon, GithubIcon, LinkedInIcon } from "../svgs/svgs";

function Socials() {

  return (
    <div className="flex flex-row gap-2 items-center">
      <a className="hover:opacity-80" target="_blank" href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
        <LinkedInIcon width="21" />
      </a>
      <a className="hover:opacity-80" target="_blank" href='https://github.com/Williamlindahl03?tab=repositories'>
        <GithubIcon width="21" />
      </a>
      <button className="hover:opacity-80" onClick={() => {navigator.clipboard.writeText("williamlindahl03@gmail.com")}}>
        <EmailIcon width="28" />
      </button>
      <a href='/src/assets/william_lindahl_cv.pdf' download='william_lindahl_cv' className=" h-min text-strong text-sm px-3 rounded-full  border-1 border-strong flex flex-row gap-1 items-center hover:bg-strong hover:text-bgPrimary ">
        <p>CV</p><DownloadIcon width="16"/>
      </a>
    </div>
  )
}
export default Socials;