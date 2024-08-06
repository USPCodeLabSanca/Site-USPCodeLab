import { Footer, Header, ProjectCard, ProjectNavbar } from "src/components";
import { ProjectCardProps } from "src/types";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useData } from "src/contexts/DataContext";

const allGroup = {
  id_group: 0,
  name: "Todos",
};

function Projects() {
  const { groups, projects } = useData();
  const [selectedFrente, setSelectedFrente] = useState({
    frente: 0,
    title: "Todos",
    from: "none",
  });
  const [projectsToShow, setProjectsToShow] = useState<ProjectCardProps[][]>(
    []
  ); // inicia mostrando todos os projetos
  const [x, setX] = useState(2);

  const generateProjectCardsList = () => {
    return projects.map((project) => {
      return {
        title: project.name,
        content: project.description,
        icons: [],
        iconLinks: [],
        id_group: project.id_group,
        github_link: project.github_link,
      };
    });
  };

  // roda este useeffect uma vez para organizar as cards em listas
  useEffect(() => {
    const projectsList: ProjectCardProps[] = generateProjectCardsList();
    const projectsContainer: ProjectCardProps[][] = [];

    // oragniza cada card na lista de acordo com os tipos de frente (Exceto todos, que abrange todas as frentes)
    [...groups].forEach((frente) => {
      const array: ProjectCardProps[] = projectsList.filter((projeto) => {
        if (frente.id_group !== 0) return projeto.id_group === frente.id_group;
        return true;
      });

      projectsContainer.push(array);
    });

    setProjectsToShow(projectsContainer);
  }, []);

  useEffect(() => {
    // a cada vez que a frente é selecionada, pega o index desta frente para poder transladar os elementos
    let x = 0;
    groups.forEach((frente, index) => {
      if (selectedFrente.frente == frente.id_group) {
        x = index;
      }
    });
    setX(x);
  }, [selectedFrente]);

  const [h, setH] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setH(window.innerHeight);
  });

  return (
    <>
      <Header />

      <div
        className="absolute bg-gradient-to-tr from-white to-primary
        w-full py-24 md:pt-32 md:pb-24 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background z-10"
      >
        PROJETOS
      </div>

      <div className="z-0 font-monteserrat py-28 md:py-36 font-medium text-white text-center"></div>

      <div className="flex flex-col justify-center items-center my-20">
        <ProjectNavbar frentes={groups} setSelectedFrente={setSelectedFrente} />

        <div className="font-poppins text-textLightGrey text-justify text-sm md:text-base w-2/3 m-10">
          {/* {description} */}
        </div>

        <div className="w-[100vw] flex flex-row overflow-hidden">
          {
            // para cada frente
            projectsToShow.map((area, index) => {
              return (
                <div className="w-[100%] " key={index}>
                  {
                    // para cada projeto
                    area.map((project, key) => {
                      return (
                        <motion.div
                          className="pb-6 px-2 md:px-10 w-[100vw]"
                          key={key}
                          animate={{
                            x: `calc(-${x * 100}vw)`,
                          }}
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            duration: 0.2,

                            x: {
                              type: "spring",
                              ease: "easeInOut",
                              duration: 0.5,
                              delay: key * 0.1,
                            },
                          }}
                        >
                          <ProjectCard
                            className="w-11/12 md:w-8/12 mx-auto"
                            {...project}
                          ></ProjectCard>
                        </motion.div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Projects;
