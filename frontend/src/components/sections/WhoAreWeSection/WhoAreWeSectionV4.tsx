import React from 'react';
import { ImageScroll } from '../../index';
import {
  devlearnImage0,
  devlearnImage1,
  hackfoolsImage0,
  hackfoolsImage1,
  hackfoolsImage2,
  hackfoolsImage3,
  hackfoolsImage4
} from 'src/assets';
import { motion } from 'framer-motion';

const WhoAreWeSection: React.FC = () => {

  const imageArray = [
    devlearnImage0,
    devlearnImage1,
    hackfoolsImage0,
    hackfoolsImage1,
    hackfoolsImage2,
    hackfoolsImage3,
    hackfoolsImage4
  ];

  const textArray = [
    "O CodeLab é um grupo de extensão da USP voltado para a geração de inovação tecnológica.",
    "Nos organizamos em diferentes frentes para oferecer aulas de Web básico, estudar diversas tecnologias e desenvolver projetos variados.",
    "Nosso objetivo é não apenas aprimorar nossas habilidades técnicas, mas também impactar positivamente comunidades dentro e fora da USP.",
    "Somos um grupo descontraído, com membros genuinamente interessados em aprender novas tecnologias e criar projetos incríveis!"
  ]

  return (
    <>
      <section className='relative' id="whoAreWe">
        <div className='text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary mb-40'>Sobre nós</div>
        <div className='grid grid-cols-2'>
          <div className='w-full flex flex-col items-center'>
            <motion.div className='sticky top-1/4 w-2/3'>
              <ImageScroll images={imageArray}></ImageScroll>
            </motion.div>
          </div>
          <div className='flex flex-col gap-64 items-start mt-24'>
            {textArray.map((text) => {
              return (<div className='w-2/3 font-poppins text-white font-normal text-base md:text-lg md:text-left md:mr-10 lg:text-xl'>{text}</div>)
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWeSection;
