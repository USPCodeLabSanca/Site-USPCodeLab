import { ProjectCard, ProjectNavbar } from 'src/components'
import { FrenteProps } from 'src/types'

import { GithubDarkIcon, InstagramIcon } from 'src/assets'
import { ProjectCardProps } from 'src/types'
import { useEffect, useState } from 'react'

// exemplo de dados que serao retirados do banco de dados e transformados em ProjectCardProps
const FirstProject : ProjectCardProps = {
  title : "Projeto 1",
  content : "Exemplo de projeto muito legal",
  icons : [GithubDarkIcon, InstagramIcon],
  iconLinks : ["github.com", "instagram.com"]
}

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

  useEffect(()=>{
    // Update da frente selecionada
    // mudar os elementos da tela
  },[selectedFrente])

  return (
    <div>
      <div>Projects</div>

      <ProjectNavbar frentes={frentes} setSelectedFrente={setSelectedFrente}/>
      {/* <ProjectCard title="Projeto 1" content="Exemplo de projeto muito legal" icons={[GithubDarkIcon, InstagramIcon]} /> */}
      
      {/* obs: chamar para cada projeto, o componente desta forma (evita refatoraçao de codigo): */}
      <ProjectCard {...FirstProject}/> 
    </div>
  )
}

export default Projects