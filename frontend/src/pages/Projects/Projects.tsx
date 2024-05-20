import { ProjectCard } from 'src/components'

import { GithubDarkIcon, InstagramIcon } from 'src/assets'
import { ProjectCardProps } from 'src/types'

// exemplo de dados que serao retirados do banco de dados e transformados em ProjectCardProps
const FirstProject : ProjectCardProps = {
  title : "Projeto 1",
  content : "Exemplo de projeto muito legal",
  icons : [GithubDarkIcon, InstagramIcon],
  iconLinks : ["github.com", "instagram.com"]
}

function Projects() {
  return (
    <div>
      <div>Projects</div>
      {/* <ProjectCard title="Projeto 1" content="Exemplo de projeto muito legal" icons={[GithubDarkIcon, InstagramIcon]} /> */}
      
      {/* obs: chamar para cada projeto, o componente desta forma (evita refatoraçao de codigo): */}
      <ProjectCard {...FirstProject}/> 
    </div>
  )
}

export default Projects