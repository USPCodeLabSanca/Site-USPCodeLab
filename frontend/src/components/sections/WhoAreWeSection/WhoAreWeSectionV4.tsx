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
import TextAnimation from './TextAnimation/TextAnimation';

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
        <div className='text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary mb-20 md:mb-40'>Sobre nós</div>
        <motion.div className='sticky top-0 w-full md:hidden'>
          <ImageScroll images={imageArray}></ImageScroll>
        </motion.div>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='w-full hidden md:block'>
            <motion.div className='sticky top-0 w-full md:top-1/4'>
              <ImageScroll images={imageArray}></ImageScroll>
            </motion.div>
          </div>
          <div className='flex flex-col gap-64 items-center mt-24 mb-24'>
            {textArray.map((text, index) => {
              return (<TextAnimation key={index} text={text}/>)
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWeSection;
