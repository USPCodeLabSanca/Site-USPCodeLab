import React from 'react'
import { SVGType } from 'src/types'


// type SVGType = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

// Props do icone - Passar imagem e alt text como parametero. Style eh opcional.
interface IconProps {
    // SVG?: SVGType,
  // PNG? : React.FunctionComponent,
    title: string,
    Image: SVGType | React.FunctionComponent | string,
    alt : string,
    style? : string,
    link?: string // proval link associado
}

// Componente para inserir icone
const Icon : React.FC<IconProps> = ( props : IconProps)  => {

    // const Image : SVGType | React.FunctionComponent | undefined =  props.SVG ? props.SVG : props.PNG;
  const Image = props.Image
  return (
    <>
        {/* componente icone com estilizaçao padrao w-14 caso a prop style nao seja passada */}
        {props?.link ? 
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img className={props.style ? props.style : 'w-14'} title={props.title} src={Image.toString()} alt={props.alt} />
          </a>
          : 
          <img className={props.style ? props.style : 'w-14'} title={props.title} src={Image.toString()} alt={props.alt} />
          }
        

    </>
  )
}

export default Icon;