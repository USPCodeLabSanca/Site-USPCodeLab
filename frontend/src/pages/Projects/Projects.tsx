import { ProjectCard } from 'src/components'

import { GithubDarkIcon, InstagramIcon } from 'src/assets'

function Projects() {
  return (
    <div>
      <div>Projects</div>
      <ProjectCard title="Projeto 1" text="Exemplo de projeto muito legal" icons={[GithubDarkIcon, InstagramIcon]} />
    </div>
  )
}

export default Projects