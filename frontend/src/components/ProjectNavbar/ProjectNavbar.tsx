import { useEffect, useState } from "react"

import { FrenteProps } from "src/types"

// Interface que define o formato de um objeto que representa uma frente e a direcao dela para o componente pai
interface SelectedFrenteProps{
    frente: string,
    from: string
}

// Interface que define as propriedades do componente ProjectNavbar
interface ProjectNavbarProps{
    frentes: FrenteProps[];
    setSelectedFrente: (frente: SelectedFrenteProps) => void
}

export default function projecNavbar({frentes, setSelectedFrente}: ProjectNavbarProps){
    // Lista de frentes que serao exibidas no navbar

    // Estado que armazena a frente selecionada
    const [prevFrente, setPrevFrente] = useState("todos")
    const [frenteSelecionada, setFrenteSelecionada] = useState("todos")

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
        setSelectedFrente({frente: frenteSelecionada, from: from});
    },[frenteSelecionada])

    return(
        <div className="flex font-poppins font-semibold text-2xl select-none ">
            {frentes.map((frente, index) => {
                return(
                    <div key={index} className={`flex gap-10 ${index == 0?'border-l':''}`}>
                        <p 
                            className={`${frenteSelecionada == frente.code ?'text-primary':'text-lightGrayBackground'} mx-10 cursor-pointer transition-colors`} 
                            onClick={()=>{
                                setPrevFrente(frenteSelecionada)
                                setFrenteSelecionada(frente.code)
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