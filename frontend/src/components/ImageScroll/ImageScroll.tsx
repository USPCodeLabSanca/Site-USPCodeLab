import React, { useState } from 'react'
import Scrollable from './Scrollable/Scrollable';
import { useInterval } from 'src/utils';

import { SVGType } from 'src/types';
import { motion } from 'framer-motion';

// type ScrollableType = typeof Scrollable;

interface ImageScrollProps {
  images: React.FC[] | SVGType[] | string[];
}

// const images = [0, 1, 2, 3, 4, 5]


const ImageScroll: React.FC<ImageScrollProps> = (props: ImageScrollProps) => {
  const imageArray = props.images;

  const [imageIndex, setImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const [index, setIndex] = useState(imageIndex); // index conteudo da imagem atual
  const [nextIndex, setNextIndex] = useState(nextImageIndex); // index do conteudo da proxima imagem
  const [tempIndex, setTempIndex] = useState(3); //  index temporario

  const [i, setI] = useState(0);

  const [itensTranlate, setItensTranslate] = useState([1, 1, 1])


  const updateImageIndex = () => {

    setImageIndex(imageIndex === imageArray.length - 1 ? 0 : imageIndex + 1);
    setNextImageIndex(nextImageIndex === imageArray.length - 1 ? 0 : nextImageIndex + 1)
  }

  const moveDown = () => { // move para baixo

    updateImageIndex();
    let new_i = 0;

    // console.log(i)
    switch (i) {
      case 0: // temp index invisivel - 1
        setItensTranslate([-1, 2, 2])
        // console.log('depois3: ' , i)
        setI(1);
        setTempIndex(nextImageIndex)
        new_i = 1;
        break;

      case 1: // index invisivel - 3
        setItensTranslate([0, 0, 3])
        // console.log('depoisxxx: ' , i)
        setI(2);
        setIndex(nextImageIndex);
        new_i = 2;
        break;

      case 2: // nextindex invisivel - 0
        setItensTranslate([1, 1, 1])
        // console.log('depois2: ' , i)
        setI(0);
        setNextIndex(nextImageIndex)
        new_i = 0;
        break;
    }
    return new_i;

  }

  useInterval(moveDown, 4000);

  const opacityVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <>
      <div className='w-full h-72 overflow-y-hidden md:overflow-y-visible'>
        <motion.div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateY(${-1 * itensTranlate[0] * 100}%)` }}
          initial='hidden'
          animate={(i === 1 || i === 0) ? 'hidden' : 'visible'}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <Scrollable image={imageArray[tempIndex]} n={tempIndex}></Scrollable>
        </motion.div>

        <motion.div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateY(-${(itensTranlate[1]) * 100}%)` }}
          initial='hidden'
          animate={(i === 2 || i === 1) ? 'hidden' : 'visible'}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <Scrollable image={imageArray[index]} n={index}></Scrollable>
        </motion.div>

        <motion.div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateY(-${(itensTranlate[2]) * 100}%)` }}
          initial='hidden'
          animate={(i === 0 || i === 2) ? 'hidden' : 'visible'}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <Scrollable image={imageArray[nextIndex]} n={nextIndex}></Scrollable>
        </motion.div>



      </div>

      {/* <button className='bg-white' onClick={moveDown}>next</button> */}
    </>

  )

}

export default ImageScroll;