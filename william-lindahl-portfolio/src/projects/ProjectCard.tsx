import { GithubIcon } from "../svgs/svgs";
import Tag from "../tags/Tag";
import TagList from "../tags/TagList";
import myImage from "./project-placeholder.jpg";

type ProjectProps = {
    image?: string,
    name: string,
    type: string,
    description?: string,
    listOfTags: string[],
    linkToCode?: string,
    linkToDemo?: string
}

function ProjectCard({image, name, type, description, listOfTags, linkToCode, linkToDemo}: ProjectProps) {

  return (
    <div className="min-w-[200px] aspect-square flex flex-col rounded-lg bg-bgSecondary overflow-hidden shadow-lg shadow-black/100 border border-bgTertiary">
        <img src={image ? image : myImage} className="grow"></img>
        <div className="px-4 py-2 flex flex-col gap-1 h-32">
          <div className="flex flex-row justify-between items-center">
            <h1 className={`text-strong font-bold text-lg leading-5`}>{name}</h1>
            <Tag bgColor="secondary" borderColor="primary" textColor="primary" text={type}/>
          </div>
            
            {/* <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p> */}
            <TagList listOfTags={listOfTags} />
            <div className="flex flex-row mt-auto">
                {linkToCode ? <a className="text-primary cursor-pointer">
                                <div className="flex flex-row gap-1">
                                  <p>Code</p><GithubIcon width="16" color="var(--color-primary)"/>
                                </div>
                              </a>: null}
                {linkToDemo ? <a className="text-highlight  cursor-pointer">View</a>: null}
            </div>
        </div>
    </div>
  )
}
export default ProjectCard;