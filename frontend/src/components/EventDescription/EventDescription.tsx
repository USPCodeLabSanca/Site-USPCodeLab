import {TextHighlight } from 'src/components'

function EventDescription({title, content, image}){
    /*
    atributos disponivoes em Eventprops:
        title : string,
        content : string
        img: string 
    */
    return (
            <div className="flex  flex-col md:flex-row md:justify-between">
                    
                <div className="flex flex-col md:justify-between px-9 py-9">
                    <div className="flex flex-col gap-1 md:justify-between md:gap-3 w-5/4">
                        <TextHighlight
                            title={title}
                            fontStyle='text6xl md:text-4xl font-monteserrat font-semibold'
                        ></TextHighlight>
                    </div>

                    <p className="font-poppins text-white text-sm w-full px-2 md:px-0 md:w-4/5 text-justify">{content}</p>
                </div>

            </div>
    )
}

export default EventDescription