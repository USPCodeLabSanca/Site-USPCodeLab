import React, { useState } from 'react'
import Scrollable from './Scrollable/Scrollable';
import  { useInterval } from 'src/utils';

import { SVGType } from 'src/types';

// type ScrollableType = typeof Scrollable;

interface ImageScrollProps {
    images: React.FC[] | SVGType[] | string[];
}

// const images = [0, 1, 2, 3, 4, 5]


const ImageScroll : React.FC<ImageScrollProps> = (props : ImageScrollProps) => {
    const imageArray = props.images;

    const [imageIndex, setImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);

    const [index, setIndex] = useState(imageIndex); // index conteudo da imagem atual
    const [nextIndex, setNextIndex] = useState(nextImageIndex); // index do conteudo da proxima imagem
    const [tempIndex, setTempIndex] = useState(3); //  index temporario

    const [i, setI] = useState(0);

    const [ itensTranlate, setItensTranslate] = useState([1, 1, 1])
    

    const updateImageIndex  = () => {

        setImageIndex( imageIndex === imageArray.length-1 ? 0 : imageIndex + 1 );
        setNextImageIndex( nextImageIndex === imageArray.length-1 ? 0 : nextImageIndex + 1 )
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

    useInterval(moveDown, 3000);
  
    return (
      <>
      <div className='h-full w-full overflow-hidden'>

         
            <div 
                className={` ${(i ===1) ? "invisible" : "visible"} flex transition-transform ease-out duration-500`}
                style={{ transform: `translateY(${-1*itensTranlate[0] * 100}%)` }} >
                    <Scrollable image={imageArray[tempIndex]} n={tempIndex}></Scrollable>
            </div>

            <div 
                className={`${(i ===2) ? "invisible" : "visible"} flex transition-transform ease-out duration-500`}
                style={{ transform: `translateY(-${(itensTranlate[1]) * 100}%)` }} >
                    <Scrollable image={imageArray[index]} n={index}></Scrollable>
            </div>

            <div 
                className={`${(i ===0) ? "invisible" : "visible"} flex transition-transform ease-out duration-500`}
                style={{ transform: `translateY(-${(itensTranlate[2]) * 100}%)` }} >
                    <Scrollable image={imageArray[nextIndex]} n={nextIndex}></Scrollable>
            </div>
        
    

      </div>

      {/* <button className='bg-white' onClick={moveDown}>next</button> */}
      </>
      
    )
  
}

export default ImageScroll;
/*


*/