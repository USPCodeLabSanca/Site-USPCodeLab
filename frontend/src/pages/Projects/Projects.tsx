import { Footer, Header, ProjectCard, ProjectNavbar } from 'src/components'
import { FrenteProps } from 'src/types'

import { GithubDarkIcon, InstagramIcon, TelegramIcon, YoutubeIcon } from 'src/assets'
import { ProjectCardProps } from 'src/types'
import { getProjects, getGroups, getTechnologys } from 'src/services'
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
    content : "Exemplo de projeto do devboost com textos muito grandes e explicativos para poder testar a responsividade deste card eehehehehheehh",
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
  },
  {
    title : "Projeto 4",
    content : "Exemplo de projeto sem tag de area (todos)",
    icons : [GithubDarkIcon, InstagramIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "devlearn"
  },
  {
    title : "Projeto 4",
    content : "Exemplo de projeto sem tag de area (todos)",
    icons : [GithubDarkIcon, InstagramIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "devboost"
  },
  {
    title : "Projeto 4",
    content : "Exemplo de projeto sem tag de area (todos)",
    icons : [GithubDarkIcon, InstagramIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "devscrap"
  },
  {
    title : "Projeto 4",
    content : "Exemplo de projeto sem tag de area (todos)",
    icons : [GithubDarkIcon, InstagramIcon],
    iconLinks : ["github.com", "instagram.com"],
    codelabArea : "devlearn"
  }
]


// OBJETO DE EXEMPLO: o ideal é que esse objeto seja gerado por meio de um banco de dados futuramente
const frentes : FrenteProps[] = [
  {nome: "Todos", code:"todos",  link: "/todos", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}, 
  {nome: "Dev.Learn", code:"devlearn",  link: "/devlearn", description :"Eita mai que é o dev learn"},
  {nome: "Dev.Boost", code:"devboost",  link: "/devboost", description :"Descriçao muito incrivel da frente dev boost longa para testar a responsividade viniccius13"},
  {nome: "Dev.Scrap", code:"devscrap",  link: "/devscrap", description :"O ideal é que a descriçao seja grande o suficiente para quebrar a linha pelo menos uma vez no front end, assim, facilita a manipulação de estilos."},
]

function Projects() {

  //Funções para puxar os dados da API

  // const [projects, setProjects] = useState([])
  // const [groups, setGroups] = useState([])
  // const [technologys, setTechnologys] = useState([])

  // useEffect(() => {
  //   getProjects();
  //   getGroups();
  //   getTechnologys();
  // }, [])
  
  //Marca qual é a frente que foi selectionada até entao
  //frente: codigo da frente selecionada
  //from: direcao em relacao a anterior ( para a animacao )
  const [selectedFrente, setSelectedFrente] = useState({frente:"todos", title: "Todos", from:"none", })
  const [projectsToShow, setProjectsToShow] = useState<ProjectCardProps[]>(projectsList); // inicia mostrando todos os projetos
  const [description, setDescription] = useState(frentes[0].description);

  useEffect(()=>{
    // Update da frente selecionada
    // mudar os elementos da tela
    
    const newProjectsToShow = projectsList.filter((project) => {
      return selectedFrente.frente === "todos" || selectedFrente.frente === project.codelabArea;
    })

    // TODO OBS!!! o jeito que foi feito pelo gabriel nao me da acesso as props das frente aqui em Projects.tsx, somente em Navbar
    // por isso estou redefinindo aqui. Pensar mais pra frente em um modo mais eficiente de fazer isso
    const frenteAtual = frentes.filter( frente => { return frente.code == selectedFrente.frente});

    setProjectsToShow(newProjectsToShow);
    setDescription(frenteAtual[0].description);

  },[selectedFrente])

  return (
    <>

      <Header />

      <div className='bg-gradient-to-tr from-white to-primary
        w-full pt-20 pb-[3rem] md:p-20 mb-10 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background '>
          PROJETOS
      </div>

      <div className='flex flex-col justify-center items-center mb-20'>
        <ProjectNavbar frentes={frentes} setSelectedFrente={setSelectedFrente}/> 

        {/* <TextHighlight className='py-8 font-medium' img={devBoost} alt='Logo' title={selectedFrente.title} fontStyle='text-8xl'></TextHighlight> */}

        {/* <div className=' md:w-1/2'> */}
              <div className='font-poppins text-textLightGrey text-justify text-sm md:text-base w-2/3 m-10'>
                {description}
              </div>
              
        {/* </div> */}

        <div className='w-[80%]'>
          {
            projectsToShow.map(project => {
              return (
                <div className='pb-6 px-2 md:px-10'>
                  <ProjectCard {...project}></ProjectCard>
                </div>
            )
            })
          }
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default Projects