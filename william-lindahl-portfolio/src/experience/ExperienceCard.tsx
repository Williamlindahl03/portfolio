import TagList from "../tags/TagList";

type ExperienceProps = {
    name: string,
    description: string,
    listOfTags: string[],
    timePeriod: string,
    location?: string,
}

function ExperienceCard({name, description, listOfTags, timePeriod, location}: ExperienceProps) {

  return (
    <div className="flex flex-row">
      <div>
        <p className="w-[100px] text-highlight text">{timePeriod}</p>
      </div>
      <div className="px-4 pb-4 flex flex-col gap-1 grow bg-bgSecondar border-l border-l-muted relative">
        <div className="size-2 absolute -left-1  top-2 bg-muted rounded-full"></div>
        <h1 className={`pb-1 text-strong font-bold text-lg leading-5`}>{name}</h1>
        {location ? <p className="text-highlight text-xs">{location}</p>:null}
        <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p>
        <TagList listOfTags={listOfTags} />
      </div>
    </div>
  )
}
export default ExperienceCard;