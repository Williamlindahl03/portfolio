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
    <div className="min-w-[200px] flex flex-col rounded-lg bg-bgSecondary overflow-hidden shadow-lg shadow-black/100 border border-tertiary">
        <img src={image ? image : myImage}></img>
        <div className="px-4 py-2 flex flex-col gap-1 grow">
          <div className="flex flex-row justify-between">
            <h1 className={`text-strong font-bold text-lg leading-5`}>{name}</h1>
            <Tag bgColor="secondary" borderColor="primary" textColor="primary" text={type}/>
          </div>
            
            {/* <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p> */}
            <TagList listOfTags={listOfTags} />
            <div className="flex flex-row mt-auto">
                {linkToCode ? <a className="text-primary cursor-pointer">Code</a>: null}
                {linkToDemo ? <a className="text-highlight  cursor-pointer">View</a>: null}
            </div>
        </div>
    </div>
  )
}
export default ProjectCard;