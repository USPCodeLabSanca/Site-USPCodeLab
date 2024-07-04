import { Footer, Header, ProjectCard, ProjectNavbar } from 'src/components'
import { FrenteProps } from 'src/types'

import { GithubDarkIcon, InstagramIcon, TelegramIcon, YoutubeIcon } from 'src/assets'
import { ProjectCardProps } from 'src/types'
import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

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
  
  //Marca qual é a frente que foi selectionada até entao
  //frente: codigo da frente selecionada
  //from: direcao em relacao a anterior ( para a animacao )
  const [selectedFrente, setSelectedFrente] = useState({frente:"todos", title: "Todos", from:"none", })
  const [projectsToShow, setProjectsToShow] = useState<ProjectCardProps[][]>([]); // inicia mostrando todos os projetos
  
  // const [description, setDescription] = useState(frentes[0].description);
  // const allProjects

  useEffect(() => {
    
  })

  useEffect(()=>{
    // Update da frente selecionada
    // mudar os elementos da tela

    
    // const newProjectsToShow = projectsList.filter((project) => {
    //   return selectedFrente.frente === "todos" || selectedFrente.frente === project.codelabArea;
    // })

    const projectsContainer: ProjectCardProps[][] = []


    frentes.forEach((frente) => {
      const array : ProjectCardProps[] = projectsList.filter((projeto) => {
        return projeto.codelabArea == frente.code
        
      })

      projectsContainer.push(array)

      console.log(projectsContainer)
    })
    
    // console.log(projectsContainer);
    // TODO OBS!!! o jeito que foi feito pelo gabriel nao me da acesso as props das frente aqui em Projects.tsx, somente em Navbar
    // por isso estou redefinindo aqui. Pensar mais pra frente em um modo mais eficiente de fazer isso
    // const frenteAtual = frentes.filter( frente => { return frente.code == selectedFrente.frente});

    setProjectsToShow(projectsContainer);
    // setDescription(frenteAtual[0].description);

    if (selectedFrente.from === "left") {
      setX('-110%');
    } else if (selectedFrente.from === "right") {
      setX('0%');
    }

  },[selectedFrente])

  const [x, setX] = useState('0');
  

  return (
    <>
      <Header />

      <div className='bg-gradient-to-tr from-white to-primary
        w-full pt-20 pb-[3rem] md:p-20 mb-10 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background '>
          PROJETOS
      </div>

      <motion.div className='box w-8 h-8 bg-white' animate={{x}} transition={{type: "spring", delay : 0.1}}  />
      <button className='bg-white' onClick={()=> {setX('0')}}>+</button>

      <div className='flex flex-col justify-center items-center mb-20'>
        <ProjectNavbar frentes={frentes} setSelectedFrente={setSelectedFrente}/> 

        
          <div className='font-poppins text-textLightGrey text-justify text-sm md:text-base w-2/3 m-10'>
            {/* {description} */}
          </div>
              

        <div className='w-[100vw] '>
          {

            // projectsToShow.forEach((areas, ) => {
            //   areas.map((project, p_index) => {
            //     return (

            //     )
            //   })
              
            // })
            // projectsToShow.map((project, index) => {
            //   let op = 1;
            //   let dis = 'block'
            //   if (index == 0)  {op = 1; dis = 'block'}
            //   return (
                
            //     <motion.div key={index} animate={
            //       {opacity: op,
            //         display : dis
            //       }
            //     } transition={ { ease : 'easeInOut', duration : 0.8, delay : index * 0.1}}>
            //       <div className='pb-6 px-2 md:px-10' key={index}>
            //         <ProjectCard {...project}></ProjectCard>
            //       </div>
            //      </motion.div>
            // )
            // })
          }
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default Projects