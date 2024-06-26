// versão com hover

import React, { useRef, useState } from 'react';

import { useScroll, useTransform, motion, useAnimationControls } from 'framer-motion';
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
  imgDelta: [0, 0.25, 0.3, 0.7, 0.8],
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
  const y = useTransform(scrollYProgress, obj.imgDelta, [200, 160, 50, -50, -200])

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

  // guardar as coordenadas de quando a imagem foi clicada
  const [coordinates0, setCoordinates0] = useState({ x: 0, y: 0 });
  const [coordinates1, setCoordinates1] = useState({ x: 0, y: 0 });
  const [coordinates2, setCoordinates2] = useState({ x: 0, y: 0 });
  const [coordinates3, setCoordinates3] = useState({ x: 0, y: 0 });
  const [coordinates4, setCoordinates4] = useState({ x: 0, y: 0 });
  const [coordinates5, setCoordinates5] = useState({ x: 0, y: 0 });

  // controle de animação (coisa do framer motion)
  const controls0 = useAnimationControls();
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const controls4 = useAnimationControls();
  const controls5 = useAnimationControls();

  // vê se foi apertado recentemente
  // caso tenha sido apertado dentro de 10 segundos, 
  // não atualiza as coordenadas guardadas
  const [isTapped0, setIsTapped0] = useState(false);
  const [isTapped1, setIsTapped1] = useState(false);
  const [isTapped2, setIsTapped2] = useState(false);
  const [isTapped3, setIsTapped3] = useState(false);
  const [isTapped4, setIsTapped4] = useState(false);
  const [isTapped5, setIsTapped5] = useState(false);

  // funções para guardar cada coordenada
  const getCoordinates0 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped0) {
      setCoordinates0({ x: img0x.get(), y: img0y.get() });
      setIsTapped0(true);
      setTimeout(() => { setIsTapped0(false) }, 10000);
    }
  }
  const getCoordinates1 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped1) {
      setCoordinates1({ x: img1x.get(), y: img1y.get() });
      setIsTapped1(true);
      setTimeout(() => { setIsTapped1(false) }, 10000);
    }
  }
  const getCoordinates2 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped2) {
      setCoordinates2({ x: img2x.get(), y: img2y.get() });
      setIsTapped2(true);
      setTimeout(() => { setIsTapped2(false) }, 10000);
    }
  }
  const getCoordinates3 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped3) {
      setCoordinates3({ x: img3x.get(), y: img3y.get() });
      setIsTapped3(true);
      setTimeout(() => { setIsTapped3(false) }, 10000);
    }
  }
  const getCoordinates4 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped4) {
      setCoordinates4({ x: img4x.get(), y: img4y.get() });
      setIsTapped4(true);
      setTimeout(() => { setIsTapped4(false) }, 10000);
    }
  }
  const getCoordinates5 = () => {
    controlsDimm.start('dimmed');
    if (!isTapped5) {
      setCoordinates5({ x: img5x.get(), y: img5y.get() });
      setIsTapped5(true);
      setTimeout(() => { setIsTapped5(false) }, 10000);
    }
  }

  // funções para voltar para a coordenada original
  const handleTapEnd0 = () => {
    controlsDimm.start('hidden')
    controls0.start({ scale: 1, x: coordinates0.x, y: coordinates0.y });
  };
  const handleTapEnd1 = () => {
    controlsDimm.start('hidden')
    controls1.start({ scale: 1, x: coordinates1.x, y: coordinates1.y });
  };
  const handleTapEnd2 = () => {
    controlsDimm.start('hidden')
    controls2.start({ scale: 1, x: coordinates2.x, y: coordinates2.y });
  };
  const handleTapEnd3 = () => {
    controlsDimm.start('hidden')
    controls3.start({ scale: 1, x: coordinates3.x, y: coordinates3.y });
  };
  const handleTapEnd4 = () => {
    controlsDimm.start('hidden')
    controls4.start({ scale: 1, x: coordinates4.x, y: coordinates4.y });
  };
  const handleTapEnd5 = () => {
    controlsDimm.start('hidden')
    controls5.start({ scale: 1, x: coordinates5.x, y: coordinates5.y });
  };

  // control para deixar o ambiente escuro exceto a foto
  const controlsDimm = useAnimationControls();
  const variantsDimm = {
    hidden: {
      opacity: 0,
      zIndex: -1,
    },
    dimmed: {
      opacity: 0.8,
      zIndex: 50,
    }
  }

  return (
    <>
      <section
        ref={targetRef}
        className='relative h-[300vh]'
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in,
                faucibus iaculis ex. Vivamus maximus mauris sem, vestibulum ultrices libero dictum in. Aenean
                sagittis tincidunt rhoncus. Vestibulum ut eros urna. Vivamus ut suscipit libero. Aliquam eget
                dapibus ante, sagittis imperdiet ipsum. Nulla vel erat purus. Nullam sed semper magna. Fusce
                elementum, enim a mollis fermentum, lectus nibh lacinia augue, et interdum tellus metus id erat.
                Maecenas ut iaculis nibh. Nam sed lobortis est. In suscipit tristique ex ac auctor.
              </div>
              <div className='w-52 md:w-64 h-10 mt-10'>
                <Button content='Como participar?'></Button>
              </div>
            </div>
          </div>

          <motion.div
            initial='hidden'
            animate={controlsDimm}
            variants={variantsDimm}
            className='fixed top-0 w-full h-full bg-black' />

          <motion.img src={devlearnImage0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: 400, y: 150, zIndex: 100 }}
            onTapStart={getCoordinates0}
            onTap={handleTapEnd0}
            onTapCancel={handleTapEnd0}
            animate={controls0}
            style={{ x: img0x, y: img0y, opacity: imgOpacity }}
            className='fixed top-10 left-28 w-1/6 hidden md:block' />

          <motion.img src={devlearnImage1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: 450, y: 0, zIndex: 100 }}
            onTapStart={getCoordinates1}
            onTap={handleTapEnd1}
            onTapCancel={handleTapEnd1}
            animate={controls1}
            style={{ x: img1x, y: img1y, opacity: imgOpacity }}
            className='fixed top-1/3 w-1/5 z-10 hidden md:block' />

          <motion.img src={hackfoolsImage0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: 400, y: -150, zIndex: 100 }}
            onTapStart={getCoordinates2}
            onTap={handleTapEnd2}
            onTapCancel={handleTapEnd2}
            animate={controls2}
            style={{ x: img2x, y: img2y, opacity: imgOpacity }}
            className='fixed top-2/3 left-24 w-1/6 hidden md:block' />

          <motion.img src={hackfoolsImage1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: -400, y: 150, zIndex: 100 }}
            onTapStart={getCoordinates3}
            onTap={handleTapEnd3}
            onTapCancel={handleTapEnd3}
            animate={controls3}
            style={{ x: img3x, y: img3y, opacity: imgOpacity }}
            className='fixed top-0 right-28 w-1/6 hidden md:block' />

          <motion.img src={hackfoolsImage2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: -450, y: 0, zIndex: 100 }}
            onTapStart={getCoordinates4}
            onTap={handleTapEnd4}
            onTapCancel={handleTapEnd4}
            animate={controls4}
            style={{ x: img4x, y: img4y, opacity: imgOpacity }}
            className='fixed top-1/3 right-10 w-1/5 z-10 hidden md:block' />

          <motion.img src={hackfoolsImage3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2, x: -400, y: -150, zIndex: 100 }}
            onTapStart={getCoordinates5}
            onTap={handleTapEnd5}
            onTapCancel={handleTapEnd5}
            animate={controls5}
            style={{ x: img5x, y: img5y, opacity: imgOpacity }}
            className='fixed top-2/3 right-24 w-1/6 hidden md:block' />

        </motion.div>
      </section>
    </>

  )
}

export default WhoAreWeSection