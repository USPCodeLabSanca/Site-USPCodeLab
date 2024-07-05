// versão sem hover

import React, { useRef } from 'react';

import { useScroll, useTransform, motion } from 'framer-motion';
import { Button, ImageScroll } from '../../index';
import {
  devlearnImage0,
  devlearnImage1,
  hackfoolsImage0,
  hackfoolsImage1,
  hackfoolsImage2,
  hackfoolsImage3,
  hackfoolsImage4
} from 'src/assets';

let obj = {
  imgDelta: [0, 0.2, 0.4, 0.6, 0.8],
  imgXLeft: [10, 10, 10, 10, 10],
  imgXRight: [-10, -10, -10, -10, -10],
}

const WhoAreWeSection: React.FC = () => {
  // array de imagens para utilizar no imageScroll
  // o imageScroll só aparece no mobile
  const imageArray = [
    devlearnImage0,
    devlearnImage1,
    hackfoolsImage0,
    hackfoolsImage1,
    hackfoolsImage2,
    hackfoolsImage3,
    hackfoolsImage4
  ]

  // o useRef referencia a seção inteira.
  // É necessário para utilizar o useScroll do Framer Motion
  const targetRef = useRef<HTMLDivElement>(null);
  // o scrollYProgress tem um valor de 0 a 1, que representa a porcentagem
  // do progresso do scroll vertical na seção. Serve para poder animar as coisas
  // na hora certa.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // opacidade/escala do texto
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [1, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.7, 1], [1, 1, 1, 1, 1]);
  const y = useTransform(scrollYProgress, obj.imgDelta, [-400, -200, 0, 200, 400])

  // opacidade de todas as imagens
  const imgOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.8, 1], [1, 1, 1, 1, 0]);

  // controle da localização e da rotação de cada imagem:
  // imagem superior esquerdo
  const img0x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const img0y = useTransform(scrollYProgress, obj.imgDelta, [500, 150, 100, 0, -200]);
  // imagem do meio esquerdo
  const img1x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const img1y = useTransform(scrollYProgress, obj.imgDelta, [300, 150, 100, -100, -200]);
  // imagem inferior esquerdo
  const img2x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const img2y = useTransform(scrollYProgress, obj.imgDelta, [100, 50, 30, -50, -200]);
  // imagem superior direito
  const img3x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const img3y = useTransform(scrollYProgress, obj.imgDelta, [500, 200, 150, 50, -100]);
  // imagem do meio direito
  const img4x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const img4y = useTransform(scrollYProgress, obj.imgDelta, [400, 200, 150, -50, -300]);
  // imagem inferior direito
  const img5x = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const img5y = useTransform(scrollYProgress, obj.imgDelta, [200, 150, 50, -50, -200]);

  return (
    <>
      <section
        ref={targetRef}
        className='relative h-screen md:h-[200vh]'
        id="whoAreWe"
      >
        <motion.div
          style={{ opacity, scale, y }}
          className='sticky top-0 flex flex-col h-screen justify-center'>
          <div className='text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary'>Sobre nós</div>
          <div className='flex flex-col md:flex-row justify-center items-center p-12 pb-0 md:gap-32'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='mb-4 h-44 md:hidden'>
              <ImageScroll images={imageArray}></ImageScroll>
            </motion.div>
            <div className='flex flex-col items-center md:w-1/2'>
              <div className='font-poppins text-textGrey text-sm md:text-base md:text-center'>
                O CodeLab é um grupo de extensão da USP voltado para a geração de inovação tecnológica.
                Nos organizamos em diferentes frentes para oferecer aulas de Web básico, estudar diversas
                tecnologias e desenvolver projetos variados. Nosso objetivo é não apenas aprimorar nossas
                habilidades técnicas, mas também impactar positivamente comunidades dentro e fora da USP.
                Somos um grupo descontraído, com membros genuinamente interessados em aprender novas tecnologias
                e criar projetos incríveis!
              </div>
              <div className='w-52 md:w-64 h-10 mt-10'>
                <Button content='Como participar?'></Button>
              </div>
            </div>
          </div>

          <motion.img src={devlearnImage0}
            style={{ x: img0x, y: img0y, opacity: imgOpacity }}
            className='fixed top-10 left-28 w-1/6 hidden md:block' />

          <motion.img src={devlearnImage1}
            style={{ x: img1x, y: img1y, opacity: imgOpacity }}
            className='fixed top-1/3 w-1/5 z-10 hidden md:block' />

          <motion.img src={hackfoolsImage0}
            style={{ x: img2x, y: img2y, opacity: imgOpacity }}
            className='fixed top-2/3 left-24 w-1/6 hidden md:block' />

          <motion.img src={hackfoolsImage1}
            style={{ x: img3x, y: img3y, opacity: imgOpacity }}
            className='fixed top-0 right-28 w-1/6 hidden md:block' />

          <motion.img src={hackfoolsImage2}
            style={{ x: img4x, y: img4y, opacity: imgOpacity }}
            className='fixed top-1/3 right-10 w-1/5 z-10 hidden md:block' />

          <motion.img src={hackfoolsImage3}
            style={{ x: img5x, y: img5y, opacity: imgOpacity }}
            className='fixed top-2/3 right-24 w-1/6 hidden md:block' />

        </motion.div>
      </section>
    </>

  )
}

export default WhoAreWeSection