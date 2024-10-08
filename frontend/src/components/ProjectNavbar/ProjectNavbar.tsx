import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ProjectNavbarProps } from "src/types";

export default function ProjectNavbar({
  frentes,
  setSelectedFrente,
}: ProjectNavbarProps) {
  // Lista de frentes que serao exibidas no navbar

  // Estado que armazena a frente selecionada
  const [prevFrente, setPrevFrente] = useState(0);
  const [frenteSelecionada, setFrenteSelecionada] = useState(0);
  const [nomeFrente, setNomeFrente] = useState("Todos");

  // Atualiza o estado da frente selecionada no componente pai
  useEffect(() => {
    //verifica a direcao da qual a frente foi selecionada em relacao a anterior
    let atualIndex = 0;
    let prevIndex = 0;
    frentes.forEach((frente, index) => {
      if (frente.id_group == frenteSelecionada) {
        atualIndex = index;
      }
      if (frente.id_group == prevFrente) {
        prevIndex = index;
      }
    });
    let from;
    if (atualIndex > prevIndex) {
      from = "left";
    } else {
      if (atualIndex == prevIndex) {
        from = "none";
      } else {
        from = "right";
      }
    }
    setSelectedFrente({
      frente: frenteSelecionada,
      title: nomeFrente,
      from: from,
    });
  }, [frenteSelecionada]);

  return (
    <div className="flex justify-center font-poppins font-semibold text-sm sm:text-base md:text-2xl select-none ">
      {frentes.map((frente, index) => {
        return (
          <div
            key={index}
            className={`flex gap-10 ${index != 0 ? "border-l" : ""}`}
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${
                frenteSelecionada == frente.id_group
                  ? "text-primary"
                  : "text-lightGrayBackground"
              } mx-2 md:mx-10 cursor-pointer transition-colors`}
              onClick={() => {
                setPrevFrente(frenteSelecionada);
                setFrenteSelecionada(frente.id_group);
                setNomeFrente(frente.name);
              }}
            >
              {frente.name}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
