import { useEffect, useState } from 'react';
import Date from './Date/Date'
import { motion } from 'framer-motion';
import { EventDescription } from 'src/components';

/*
    Interface com 
    titulo, texto, icones (opcional)
*/

import { EventCardProps } from "src/types";

function EventCard(cardProps: EventCardProps) {

  const [scrollY, setScrollY] = useState<number>(0);
  const onScroll = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  // Parabolic function: y = a * (x - h)^2 + k
  const a = -0.0006; // Controls the curvature
  const translateX = a * Math.pow((scrollY - cardProps.offset), 2);
  const scale = Math.max(1 - 1.5 * Math.pow((scrollY - cardProps.offset) / cardProps.h, 2), 0);
  const opacity = Math.max(1 - 1.5 * Math.pow((scrollY - cardProps.offset) / cardProps.h, 2), 0);

  return (
    <section
      className={"relative md:ml-20"}
      style={{
        height: cardProps.h / 2
       }}
    >
      <motion.div
        style={{
          x: translateX,
          scale,
          opacity,
          transformOrigin: '10% center'
        }}
        className="flex flex-row sticky align-top h-1/2 w-full gap-4 z-10">
        <Date year={cardProps.date.year} day={cardProps.date.day} />
        <motion.div
          className='flex flex-col md:flex-row w-full h-full'>
          <div className='md:w-2/3'>
            <EventDescription title={cardProps.title} content={cardProps.content} />
          </div>
          <div className='flex flex-col md:flex-row gap-2'>
            <div className="w-64 hidden md:block">
              {cardProps.images?.map((image) => {
                return (<img src={image} key={image}></img>)
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section >
  )
}

export default EventCard