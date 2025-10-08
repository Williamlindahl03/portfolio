import TagList from "../tags/TagList";

type ExperienceProps = {
    name: string,
    description: string,
    logoImgSrc: string,
    listOfTags: string[],
    timePeriod: string,
    location?: string,
}

function ExperienceCard({name, description, logoImgSrc, listOfTags, timePeriod, location}: ExperienceProps) {

  return (
    <div className="flex flex-row items-center p-4 bg-bgSecondarys rounded-lg border border-bgSecondary">
      <img src={logoImgSrc} className="size-16 mx-4 rounded-lg hidden xs:block"/>
      <div className="xs:px-4 flex flex-col gap-1 bg-bgSecondar xs:border-l border-l-muted">
        <div className="flex flex-row items-start gap-2">
          <img src={logoImgSrc} className="size-15 rounded-lg xs:hidden"/>
          <div>
            <p className="text-xs pb-1 text-highlight">{timePeriod}</p>
            <h1 className={`text-strong font-bold text-lg leading-5`}>{name}</h1>
          </div>
        </div>
        

        {location ? <p className="text-highlight text-xs">{location}</p>:null}
        <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p>
        <TagList listOfTags={listOfTags} />
      </div>
    </div>
  )
}
export default ExperienceCard;