interface ProjectCardProps {
    title: string;
    text: string;
    icons?: string[];
}

function ProjectCard({title, text, icons}: ProjectCardProps){
    return (
        <div className="bg-grayBackground rounded-xl  flex  flex-col md:flex-row px-6 py-5 gap-4">
            <div className="flex flex-col gap-1 md:justify-between md:gap-3 w-5/4">
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <h2 className="font-monteserrat font-medium text-white text-3xl px-2 md:px-0">{title}</h2>
                    <div className="flex gap-2">
                        {/* icones */}
                        {icons?.map(() => {
                            return <div/>
                        })}
                    </div>
                </div>
                <p className="font-poppins text-white text-sm w-full px-2 md:px-0 md:w-4/5 text-justify">{text}</p>
            </div>
            <div>
                <button className="bg-primary rounded-xl px-1 md:w-max w-full py-2 md:py-1 flex items-center justify-center">
                    {/* Github icon */}
                    <p className="font-monteserrat font-semibold px-2 ">
                        Ver no Github
                    </p>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard