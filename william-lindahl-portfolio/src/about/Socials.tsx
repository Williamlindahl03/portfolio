import { useState } from "react";
import { DownloadIcon, EmailIcon, GithubIcon, LinkedInIcon } from "../svgs/svgs";

function Socials() {

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("williamlindahl03@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <a className="hover:opacity-80" target="_blank" href='https://www.linkedin.com/in/william-lindahl-10b153274/'>
        <LinkedInIcon width="21" />
      </a>
      <a className="hover:opacity-80" target="_blank" href='https://github.com/Williamlindahl03?tab=repositories'>
        <GithubIcon width="21" />
      </a>
      <div className="h-[28px] relative">
        <button className="hover:opacity-80 cursor-pointer" onClick={() => handleCopy()}>
          <EmailIcon width="28" />
        </button>
        {copied ? <div className="absolute -bottom-9 text-muted text-nowrap bg-bgTertiary px-2 py-1 rounded-lg"><p>Copied!</p></div> : null}
      </div>
      
      <a href='william_lindahl_cv.pdf' download='william_lindahl_cv' className=" h-min text-strong text-sm px-3 rounded-full  border-1 border-strong flex flex-row gap-1 items-center hover:bg-strong hover:text-bgPrimary transition-colors duration-200">
        <p>CV</p><DownloadIcon width="16"/>
        
      </a>
    </div>
  )
}
export default Socials;