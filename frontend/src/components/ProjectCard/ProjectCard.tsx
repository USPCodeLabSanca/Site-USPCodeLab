import React from "react";
import Icon from "../Icon/Icon";

/*
    Interface com 
    titulo, texto, icones (opcional)
*/
import { GithubDarkIcon } from 'src/assets';

type SVGType = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

interface ProjectCardProps {
    title: string;
    text: string;
    icons?: React.ElementType[],
}

function ProjectCard({title, text, icons}: ProjectCardProps){
    return (
        <div className="bg-grayBackground rounded-xl  flex  flex-col md:flex-row px-6 py-5 gap-4 md:justify-between">

            <div className="flex flex-col gap-1 md:justify-between md:gap-3 w-5/4">
                
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <h2 className="font-monteserrat font-semibold text-white text-4xl px-2 md:px-0 mr-4">{title}</h2>
                    <div className="flex gap-4">
                        {/* icones */}
                        {icons?.map((icon) => {
                            return <Icon style="w-8 select-none" Image={icon as SVGType} alt="tech icon"/>
                        })}
                    </div>
                </div>

                <p className="font-poppins text-white text-sm w-full px-2 md:px-0 md:w-4/5 text-justify">{text}</p>
            </div>

            <div>
                <button className="bg-primary rounded-xl px-3 md:w-max w-full py-2 md:py-1 flex items-center justify-center hover:bg-primaryDark transition-colors">
                    {/* Github icon */}
                    <Icon style="w-7" Image={GithubDarkIcon} alt="Icone github"/>

                    <p className="font-monteserrat font-semibold px-2 ">
                        Ver no Github
                    </p>
                </button>
            </div>

        </div>
    )
}

export default ProjectCard