import { useEffect, useState } from "react"

import {  ProjectNavbarProps } from "src/types"



export default function ProjectNavbar({frentes, setSelectedFrente}: ProjectNavbarProps){
    // Lista de frentes que serao exibidas no navbar

    // Estado que armazena a frente selecionada
    const [prevFrente, setPrevFrente] = useState("todos")
    const [frenteSelecionada, setFrenteSelecionada] = useState("todos")
    const [nomeFrente, setNomeFrente] = useState("Todos");

    // Atualiza o estado da frente selecionada no componente pai
    useEffect(()=>{
        //verifica a direcao da qual a frente foi selecionada em relacao a anterior
        let atualIndex = 0; 
        let prevIndex = 0;
        frentes.forEach((frente, index) => {
            if(frente.code == frenteSelecionada){
                atualIndex = index;
            }
            if(frente.code == prevFrente){
                prevIndex = index;
            }
        });
        let from;
        if( atualIndex > prevIndex){
            from = "left"
        }else{
            if(atualIndex == prevIndex){
                from = "none"
            }else{
                from = "right"
            }
        }
        setSelectedFrente({frente: frenteSelecionada, title : nomeFrente,  from: from});
    },[frenteSelecionada])

    return(
        <div className="flex justify-center font-poppins font-semibold text-xs sm:text-sm md:text-2xl select-none ">
            {frentes.map((frente, index) => {
                return(
                    <div key={index} className="flex  md:gap-10 border-l ">
                        <p 
                            className={`${frenteSelecionada == frente.code ?'text-primary':'text-lightGrayBackground'} mx-2 md:mx-10 cursor-pointer transition-colors`} 
                            onClick={()=>{
                                setPrevFrente(frenteSelecionada)
                                setFrenteSelecionada(frente.code)
                                setNomeFrente(frente.nome)
                            }}
                        >
                            {frente.nome}
                        </p>
                    </div>
                )
            })}

        </div>
    )
}