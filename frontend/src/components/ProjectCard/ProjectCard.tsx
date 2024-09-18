import Icon from "../Icon/Icon";

/*
    Interface com 
    titulo, texto, icones (opcional)
*/
import { GithubDarkIcon } from "src/assets";

import { ProjectCardProps } from "src/types";

function ProjectCard(cardProps: ProjectCardProps) {
  /*
    atributos disponivoes em cardprops:
        title : string,
        content : string,
        icons?: React.FC[] | SVGType[],
        iconLinks?: string[]
    */

  return (
    <div
      className={`${cardProps.className} bg-grayBackground rounded-xl  flex  flex-col md:flex-row px-6 py-5 gap-4 md:justify-between`}
    >
      <div className="flex flex-col gap-1 md:justify-between md:gap-3 w-full">
        <div className="flex flex-col lg:flex-row gap-2 md:justify-between">
          <h2 className="font-monteserrat font-semibold text-white m-auto text-lg md:text-xl px-2 md:px-0 mr-4 ml-0 w-fit">
            {cardProps.title}
          </h2>
          <div className="flex gap-2 md:gap-2 items-center">
            {/* icones */}
            <div className="flex items-center px-2 gap-2">
              {cardProps.icons?.map((icon, index) => {
                // TODO : adicionar links para os respectivos icones
                return (
                  <Icon
                    key={index}
                    style="h-8 md:h-10 select-none py-1 md:py-2"
                    Image={cardProps.iconLinks[index]}
                    title={icon}
                    alt="tech icon"
                  />
                );
              })}
            </div>
            <div className="hidden lg:block">
              {!!cardProps.github_link && (
                <a href={cardProps.github_link}>
                  <button className="bg-primary rounded-xl px-3 md:w-max w-full py-2 md:py-1 flex items-center justify-center hover:bg-primaryDark transition-colors">
                    {/* Github icon */}
                    <Icon style="w-7" Image={GithubDarkIcon} alt="Icone github" title="Github"/>

                    <p className="font-monteserrat font-semibold px-2 hidden md:block">
                      Ver no Github
                    </p>
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="font-poppins text-white text-sm w-full px-2 md:px-0 md:w-4/5 text-start my-3">
          {cardProps.content}
        </p>

        <div className="block lg:hidden my-1">
          {!!cardProps.github_link && (
            <a href={cardProps.github_link}>
              <button className="bg-primary rounded-xl px-3 md:w-max w-full py-2 md:py-1 flex items-center justify-center hover:bg-primaryDark transition-colors">
                {/* Github icon */}
                <Icon style="w-7" Image={GithubDarkIcon} alt="Icone github" title="Github"/>

                <p className="font-monteserrat font-semibold px-2">
                  Ver no Github
                </p>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
