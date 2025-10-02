import Tag from "./Tag.tsx"

type TagListProps = {
    listOfTags: string[]
}

function TagList({listOfTags}: TagListProps) {

  return (
    <div className='flex flex-row flex-wrap gap-1'>
        {listOfTags.map((tag, index) => (
            <Tag key={index} text={tag} bgColor={"bgTertiary"} borderColor={"highlight"} textColor={"muted"}/>
        ))}
    </div>
  )
}
export default TagList;