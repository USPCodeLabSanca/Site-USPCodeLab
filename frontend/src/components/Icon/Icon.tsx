import React from 'react'

type SVGType = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

// Props do icone - Passar imagem e alt text como parametero. Style eh opcional.
interface IconProps {
    // SVG?: SVGType,
    // PNG? : React.FunctionComponent,
    Image: SVGType | React.FunctionComponent,
    alt : string,
    style? : string
}

// Componente para inserir icone
const Icon : React.FC<IconProps> = ( props : IconProps)  => {

    // const Image : SVGType | React.FunctionComponent | undefined =  props.SVG ? props.SVG : props.PNG;
    const Image = props.Image
  return (
    <>
        {/* componente icone com estilizaçao padrao w-14 caso a prop style nao seja passada */}
        <img className={props.style ? props.style : 'w-14'}  src={Image.toString()} alt={props.alt} />

    </>
  )
}

export default Icon;