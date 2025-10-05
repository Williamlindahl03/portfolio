import { DownloadIcon, GithubIcon, LinkedInIcon } from "../svgs/svgs";

function Socials() {

  return (
    <div className="flex flex-row gap-2">
      <a className="hover:opacity-80" target="_blank" href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
        <LinkedInIcon />
      </a>
      <a className="hover:opacity-80" target="_blank" href='https://github.com/Williamlindahl03?tab=repositories'>
        <GithubIcon />
      </a>
      <a href='/src/assets/william_lindahl_cv.pdf' download='william_lindahl_cv' className="text-strong px-2 rounded outline outline-muted hover:outline-strong flex flex-row gap-1 items-center hover:bg-strong hover:text-bgPrimary ">
        <p>CV</p><DownloadIcon width="19"/>
      </a>
    </div>
  )
}
export default Socials;