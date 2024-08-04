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
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    const scale = Math.max(1 - 1.5 * Math.pow((currentScrollY - cardProps.offset) / cardProps.h, 2), 0);
    if (scale > 0.9) {
      cardProps.setBg(cardProps.image);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  // Parabolic function: y = a * (x - h)^2 + k
  const a = -0.0006; // Controls the curvature
  const x = a * Math.pow((scrollY - cardProps.offset), 2);
  const scale = Math.max(1 - 1.5 * Math.pow((scrollY - cardProps.offset) / cardProps.h, 2), 0);
  const opacity = Math.max(1 - 1.5 * Math.pow((scrollY - cardProps.offset) / cardProps.h, 2), 0);

  return (
    <section
      className={"relative md:ml-20 w-full"}
      style={{
        height: cardProps.h / 2,
      }}>
      <motion.div
        style={{
          x,
          scale,
          opacity,
          transformOrigin: '13% center'
        }}
        className="flex flex-row sticky align-top h-1/2 gap-4 z-10">
        <Date date={cardProps.date} />
        <motion.div
          className='flex flex-col md:flex-row w-2/3 h-full'>
          <div className='md:w-3/4'>
            <EventDescription title={cardProps.title} content={cardProps.content} />
          </div>
        </motion.div>
      </motion.div>
    </section >
  )
}

export default EventCard