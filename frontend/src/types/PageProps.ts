import { SVGType } from "./Types";

/* Interface para props com parametros e children 
uso:
>>> const MyComponent 
*/
export interface UniversalChldrenPageProps extends React.HTMLProps<HTMLDivElement> { // template para definir props (com children)
    // definir as props aqui
}


export interface UniversalPageProps { // template para definir props **sem children**
    // definir as props aqui
}

// propr que define um card de projeto para a pagina de projetos
export interface ProjectCardProps {
    title : string,
    content : string,
    icons?: React.FC[] | SVGType[],
    iconLinks?: string[]
}