type TagProps = {
    text: string,
    bgColor: string
    borderColor: string,
    textColor: string
}

function Tag({text, bgColor, borderColor, textColor}: TagProps) {

  const bg = `var(--color-${bgColor})`;
  const br = `var(--color-${borderColor})`;
  const te = `var(--color-${textColor})`;

  return (

        <p style={{ 'backgroundColor': bg, 'borderColor': br, 'color': te }}
        className={`border text-nowrap w-min h-min px-2 rounded-full text-xs`}>{text}</p>

  )
}
export default Tag;