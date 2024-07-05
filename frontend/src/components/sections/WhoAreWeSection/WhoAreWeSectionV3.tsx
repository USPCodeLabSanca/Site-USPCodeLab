import React, { useCallback, useRef, useState } from 'react';

import { useScroll, useTransform, motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Button, ImageScroll } from '../../index';
import {
  devlearnImage0,
  devlearnImage1,
  hackfoolsImage0,
  hackfoolsImage1,
  hackfoolsImage2,
  hackfoolsImage3,
} from 'src/assets';

let obj = {
  imgDelta: [0, 0.25, 0.3, 0.7, 0.8],
  imgXLeft: [10, 10, 10, 10, 10],
  imgXRight: [-10, -10, -10, -10, -10],
}

const imageArray = [
  devlearnImage0,
  devlearnImage1,
  hackfoolsImage0,
  hackfoolsImage1,
  hackfoolsImage2,
  hackfoolsImage3,
]

let imageStyles = [
  'fixed top-10 left-28 z-20 w-1/6 hidden md:block',
  'fixed top-1/3 w-1/5 z-30 hidden md:block',
  'fixed top-2/3 left-24 z-20 w-1/6 hidden md:block',
  'fixed top-0 right-28 z-20 w-1/6 hidden md:block',
  'fixed top-1/3 right-10 z-30 w-1/5 hidden md:block',
  'fixed top-2/3 right-24 z-20 w-1/6 hidden md:block'
]

const WhoAreWeSection: React.FC = () => {

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
  const x0 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const y0 = useTransform(scrollYProgress, obj.imgDelta, [500, 150, 100, 0, -200]);
  // imagem do meio esquerdo
  const x1 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const y1 = useTransform(scrollYProgress, obj.imgDelta, [300, 150, 100, -100, -200]);
  // imagem inferior esquerdo
  const x2 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXLeft);
  const y2 = useTransform(scrollYProgress, obj.imgDelta, [100, 50, 30, -50, -200]);
  // imagem superior direito
  const x3 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const y3 = useTransform(scrollYProgress, obj.imgDelta, [500, 200, 150, 50, -100]);
  // imagem do meio direito
  const x4 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const y4 = useTransform(scrollYProgress, obj.imgDelta, [400, 200, 150, -50, -300]);
  // imagem inferior direito
  const x5 = useTransform(scrollYProgress, obj.imgDelta, obj.imgXRight);
  const y5 = useTransform(scrollYProgress, obj.imgDelta, [200, 150, 50, -50, -200]);

  let motionArray = [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
    { x: x5, y: y5 },
  ]

  const [coordinates, setCoordinates] = useState(
    motionArray.map(({ x, y }) => ({ x: x.get(), y: y.get() }))
  );

  const [selectedId, setSelectedId] = useState<number | false>(false);

  const handleClose = useCallback(() => {
    setSelectedId(false);
  }, []);

  const handleClick = (index: number) => {
    setCoordinates(
      motionArray.map(({ x, y }) => ({
        x: x.get(),
        y: y.get(),
      }))
    );
    setSelectedId(index);
    console.log(coordinates);
  };

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
          <LayoutGroup>
            {imageArray.map((src, index) => (
              <motion.img src={src}
                className={imageStyles[index]}
                whileHover={{ scale: 1.05 }}
                key={index}
                layoutId={`${index}`}
                onClick={() => { selectedId === false && handleClick(index) }}
                style={{
                  x: motionArray[index].x,
                  y: motionArray[index].y,
                  opacity: imgOpacity,
                }}
              ></motion.img>
            ))}
            <AnimatePresence>
              {selectedId !== false && (
                <>
                  <motion.div
                    initial={{ borderRadius: "1.2rem" }}
                    className='fixed w-1/2 z-40 top-1/4 left-1/4'
                    
                    key="modal">
                    <motion.img
                      className='w-full'
                      src={imageArray[selectedId]}
                      layoutId={`${selectedId}`}
                    />
                  </motion.div>
                  <motion.div
                    className="fixed -top-[300vh] z-40 left-0 h-[1000vh] w-full bg-black"
                    key="backdrop"
                    onClick={handleClose}
                    variants={{
                      hidden: {
                        opacity: 0,
                        transition: {
                          duration: 0.16
                        }
                      },
                      visible: {
                        opacity: 0.5,
                        transition: {
                          delay: 0.04,
                          duration: 0.2
                        }
                      }
                    }}
                    initial="hidden"
                    exit="hidden"
                    animate="visible"
                  />
                </>
              )}
            </AnimatePresence>
          </LayoutGroup>

        </motion.div>
      </section >
    </>

  )
}

export default WhoAreWeSection