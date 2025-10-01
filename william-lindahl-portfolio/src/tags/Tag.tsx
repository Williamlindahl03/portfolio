type TagProps = {
    text: string,
    color: string
}

function Tag({text, color}: TagProps) {

  return (
    <>
        <p className={`border border-highlight text-muted text-nowrap bg-tertiary w-min h-min px-2 rounded-full text-xs`}>{text}</p>
    </>
  )
}
export default Tag;