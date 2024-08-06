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
        <div className="flex flex-col lg:flex-row gap-2">
          <h2 className="font-monteserrat font-semibold text-white m-auto text-lg md:text-xl px-2 md:px-0 mr-4 ml-0 w-fit">
            {cardProps.title}
          </h2>
          <div className="flex px-2 gap-2 md:gap-3">
            {/* icones */}
            {cardProps.icons?.map((icon, index) => {
              // TODO : adicionar links para os respectivos icones
              return (
                <Icon
                  key={index}
                  style="w-6 select-none py-1 md:py-2"
                  Image={icon}
                  alt="tech icon"
                  link={
                    cardProps.iconLinks ? cardProps.iconLinks[index] : undefined
                  }
                />
              );
            })}
          </div>
        </div>

        <p className="font-poppins text-white text-sm w-full px-2 md:px-0 md:w-4/5 text-start">
          {cardProps.content}
        </p>
      </div>

      <div>
        {!!cardProps.github_link && (
          <a href={cardProps.github_link}>
            <button className="bg-primary rounded-xl px-3 md:w-max w-full py-2 md:py-1 flex items-center justify-center hover:bg-primaryDark transition-colors">
              {/* Github icon */}
              <Icon style="w-7" Image={GithubDarkIcon} alt="Icone github" />

              <p className="font-monteserrat font-semibold px-2 ">
                Ver no Github
              </p>
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
