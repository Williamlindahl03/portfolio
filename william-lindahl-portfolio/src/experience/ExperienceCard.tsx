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
    <div className="flex flex-row p-4 bg-bgSecondarys rounded-lg border border-bgSecondary">
      <div className="px-4 flex flex-col gap-1 grow bg-bgSecondar border-l border-l-muted">
        <p className="text-xs text-highlight">{timePeriod}</p>
        <h1 className={`text-strong font-bold text-lg leading-5`}>{name}</h1>
        {location ? <p className="text-highlight text-xs">{location}</p>:null}
        <p className={`text-muted linespace-0 leading-5 text-sm`}>{description}</p>
        <TagList listOfTags={listOfTags} />
      </div>
    </div>
  )
}
export default ExperienceCard;