import { ProjectCard, ProjectNavbar } from 'src/components'
import { FrenteProps } from 'src/types'

import { GithubDarkIcon, InstagramIcon, TelegramIcon, YoutubeIcon } from 'src/assets'
import { ProjectCardProps } from 'src/types'
import { useEffect, useState } from 'react'

// exemplo de dados que serao retirados do banco de dados e transformados em ProjectCardProps
const projectsList : ProjectCardProps[] = [
  {
    title : "Projeto 1 Titulo maior para testar responsividade",
    content : "Exemplo de projeto do devlearn",
    icons : [GithubDarkIcon, InstagramIcon, YoutubeIcon],
    iconLinks : ["github.com", "https://instagram.com", "https://www.youtube.com/watch?v=g3Vm2Z-MUkU"],
    codelabArea : "devlearn"
  },
  {
    title : "Projeto 2",
    content : "Exemplo de projeto do devboost",
    icons : [GithubDarkIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "devboost"
  },
  {
    title : "Projeto 3 jose carlos andrade do nascimento",
    content : "Exemplo de projeto do devscrap",
    icons : [GithubDarkIcon, InstagramIcon, TelegramIcon],
    iconLinks : ["github.com", "instagram.com", "segredo"],
    codelabArea : "devscrap"
  },
  {
    title : "Projeto 4",
    content : "Exemplo de projeto sem tag de area (todos)",
    icons : [GithubDarkIcon, InstagramIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "todos"
  }
]


// OBJETO DE EXEMPLO: o ideal é que esse objeto seja gerado por meio de um banco de dados futuramente
const frentes : FrenteProps[] = [
  {nome: "Todos", code:"todos",  link: "/todos"}, 
  {nome: "Dev.Learn", code:"devlearn",  link: "/devlearn"},
  {nome: "Dev.Boost", code:"devboost",  link: "/devboost"},
  {nome: "Dev.Scrap", code:"devscrap",  link: "/devscrap"},
]

function Projects() {
  
  //Marca qual é a frente que foi selectionada até entao
  //frente: codigo da frente selecionada
  //from: direcao em relacao a anterior ( para a animacao )
  const [selectedFrente, setSelectedFrente] = useState({frente:"todos", from:"none"})
  const [projectsToShow, setProjectsToShow] = useState<ProjectCardProps[]>(projectsList); // inicia mostrando todos os projetos

  useEffect(()=>{
    // Update da frente selecionada
    // mudar os elementos da tela
    
    const newProjectsToShow = projectsList.filter((project) => {
      return selectedFrente.frente === "todos" || selectedFrente.frente === project.codelabArea;
    })

    setProjectsToShow(newProjectsToShow);

  },[selectedFrente])

  return (
    <div>
      <div>Projects</div>

      <ProjectNavbar frentes={frentes} setSelectedFrente={setSelectedFrente}/>
      
      {/* obs: chamar para cada projeto, o componente desta forma (evita refatoraçao de codigo): */}
      {/* <ProjectCard {...FirstProject}/>  */}
      
      {projectsToShow.map(project => {
        return (
        <div className='pb-6 px-2 md:px-10'>
          <ProjectCard {...project}></ProjectCard>
        </div>
      )
      })
      }
    </div>
  )
}

export default Projects