import { useEffect, useRef, useState } from 'react';
import Date from './Date/Date'
import { useScroll, useTransform, motion } from 'framer-motion';
import { EventDescription } from 'src/components';

/*
    Interface com 
    titulo, texto, icones (opcional)
*/

import { EventCardProps } from "src/types";

function EventCard(cardProps: EventCardProps) {

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 1, 0.25]);

  const [scrollY, setScrollY] = useState<number>(0);
  const onScroll = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  // Parabolic function: y = a * (x - h)^2 + k
  const a = -0.001; // Controls the curvature
  const translateX = a * Math.pow((scrollY - cardProps.offset) - 150, 2);

  return (
    <section
      ref={targetRef}
      className='relative h-[200px] md:ml-32'
    >
      <motion.div
        style={{
          x: translateX,
          scale,
          transformOrigin: '25% center'
        }}
        className="flex flex-row sticky align-top h-full w-full gap-4 z-10">
        <Date year={cardProps.date.year} day={cardProps.date.day} />
        <div className="w-9 h-9 bg-primary rounded-full" />
        <div className='flex flex-col md:flex-row gap-2'>
          <EventDescription title={cardProps.title} content={cardProps.content} />
          <div className="w-64">
            {cardProps.images?.map((image) => {
              return (<img src={image}></img>)
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default EventCard