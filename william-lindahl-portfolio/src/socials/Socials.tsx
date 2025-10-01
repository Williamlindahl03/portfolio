type TagProps = {
    text: string,
    color: string
}

function Tag({text, color}: TagProps) {

  return (
    <>
        <p className={`border border-muted text-text w-min h-min px-2 rounded-full text-xs`}>{text}</p>
    </>
  )
}
export default Tag;