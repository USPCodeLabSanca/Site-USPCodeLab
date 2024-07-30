import { TextHighlight } from 'src/components'

interface EventDescriptionProps {
  title: string,
  content: string,
  image?: string,
}

function EventDescription({ title, content }: EventDescriptionProps) {
  /*
  atributos disponivoes em Eventprops:
      title : string,
      content : string
      img: string 
  */
  return (
    <div className="flex flex-col md:justify-start md:gap-5 md:px-9 bg-transparent">
      
      <div className="gap-1 md:justify-between md:gap-3">
        <TextHighlight
          title={title}
          fontStyle='text6xl md:text-4xl xl:text-5xl font-monteserrat font-semibold'
        ></TextHighlight>
      </div>
      <p className="font-poppins px-2 md:px-0 text-white text-sm md:text-sm xl:text-lg text-justify">{content}</p>
    
    </div>
  )
}

export default EventDescription