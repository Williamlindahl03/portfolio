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
    <div className="flex flex-col">
        <div className="flex flex-row">
          <div>
            <p className="py-2 w-[130px] text-highlight text">{timePeriod}</p>
          </div>
          <div className="px-3 py-3 flex flex-col gap-1 grow rounded-lg bg-bgSecondary border border-highlight shadow-lg shadow-black/100">
            <h1 className={`pb-1 text-strong font-bold text-lg leading-5`}>{name}</h1>
            {location ? <p className="text-highlight text-xs">{location}</p>:null}
            <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p>
            <TagList listOfTags={listOfTags} />
          </div>
        </div>
    </div>
  )
}
export default ExperienceCard;