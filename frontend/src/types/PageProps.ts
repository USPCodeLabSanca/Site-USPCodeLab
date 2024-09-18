import { Group, SVGType } from "./Types";

/* Interface para props com parametros e children 
uso:
>>> const MyComponent 
*/
export interface UniversalChildrenPageProps
  extends React.HTMLProps<HTMLDivElement> {
  // template para definir props (com children)
  // definir as props aqui
}

export interface UniversalPageProps {
  // template para definir props **sem children**
  // definir as props aqui
}

// tipagem que aceita className para estilizaçao customizada de componentes. (Opicional)
export interface BaseClassNameProps {
  className?: string;
}

// propr que define um card de projeto para a pagina de projetos
export interface ProjectCardProps extends BaseClassNameProps {
  title: string;
  content: string;
  icons?: React.FC[] | SVGType[];
  iconLinks?: string[];
  github_link?: string;
  id_group?: number;
}

export interface DateProps {
  date: Date;
}

// props para o componente de evento
export interface EventCardProps {
  date: Date;
  title: string;
  content: string;
  image: string;
  offset: number;
  h: number;
  setBg: (image: string) => void;
}

// props para o componente de evento
export interface EventCardMobileProps {
  id: string;
  name: string;
  description: string;
  date: string;
  photo: string;
  [key: string]: any; // This allows for additional props
}

// Interface que define o formato de um objeto que representa uma frente e a direcao dela para o componente pai
export interface SelectedFrenteProps {
  frente: number;
  title: string;
  from: string;
}

// Interface que define as propriedades do componente ProjectNavbar
export interface ProjectNavbarProps {
  frentes: Group[];
  setSelectedFrente: (frente: SelectedFrenteProps) => void;
}
