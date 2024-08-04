// define o tipo SVGType para facilitar escrita
export type SVGType = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

export type Event = {
  date: string,
  name: string,
  description: string,
  photo: string,
  id_event: string,
}

export type Group = {
  id_group: number,
  name: string,
  subtitle: string,
  description: string,
  logo: string,
  project: Project[]
}

export type Project = {
  id_project: number,
  name: string,
  description: string,
  github_link?: string,
  date: Date,
  id_group: number,
  photo?: string,
  group: string,
  technologies: Technology[],
}

export type Technology = {
  id_technology: number,
  name: string,
  logo: string,
}