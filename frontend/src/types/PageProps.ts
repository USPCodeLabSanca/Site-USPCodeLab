import { SVGType } from "./Types";

/* Interface para props com parametros e children 
uso:
>>> const MyComponent 
*/
export interface UniversalChildrenPageProps extends React.HTMLProps<HTMLDivElement> { // template para definir props (com children)
    // definir as props aqui
}


export interface UniversalPageProps { // template para definir props **sem children**
    // definir as props aqui
}

// tipagem que aceita className para estilizaçao customizada de componentes. (Opicional)
export interface BaseClassNameProps {
    className?: string;
}

// propr que define um card de projeto para a pagina de projetos
export interface ProjectCardProps extends BaseClassNameProps {
    title : string,
    content : string,
    icons?: React.FC[] | SVGType[],
    iconLinks?: string[],
    codelabArea? : string
}

// propriedade para definir as caracteristicas de uma frente
export interface FrenteProps {
    nome: string;
    code: string;
    link: string;
    description?: string
}

interface DateProps {
    year: string
    day: string
}

// props para o componente de evento
export interface EventCardProps {
    date: DateProps,
    title: string,
    content: string,
    images?: string[],
    offset: number,
    h: number,
}

// Interface que define o formato de um objeto que representa uma frente e a direcao dela para o componente pai
export interface SelectedFrenteProps{
    frente: string,
    title: string
    from: string
}

// Interface que define as propriedades do componente ProjectNavbar
export interface ProjectNavbarProps{
    frentes: FrenteProps[];
    setSelectedFrente: (frente: SelectedFrenteProps) => void
}