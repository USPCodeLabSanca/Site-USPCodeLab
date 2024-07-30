import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FrenteShapeProps {
  type: number; // o numero varia de 1 a 3 (3 opcoes de shape)
  image?: string;
  orientation: 'left' | 'right';
}

function FrenteShape({ type, orientation, image }: FrenteShapeProps) {
  type = (type - 1) % 3; // garante 0, 1 ou 2

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia('(min-width: 768px)').matches);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      drag={isLargeScreen ? "x" : false}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      initial={orientation === 'left' ?
        { x: -250, rotate: -10, } :
        { x: 250, rotate: 10 }}
      whileInView={{ x: 0, rotate: 0 }}
      exit={orientation === 'left' ?
        { x: -250, rotate: -10, } :
        { x: 250, rotate: 10 }}
      transition={{
        duration: 1,
        type: 'spring'
      }}
      className={`w-full flex items-center justify-center relative order-last ${orientation === 'left' ? 'md:order-first' : 'md:order-last'}`}>

      <div
        style={{
          borderRadius: type === 0 ? "35% 65% 70% 30% / 30% 77% 23% 70% " : type === 1 ? "40% 60% 32% 68% / 68% 28% 72% 32%" : "50% 50% 58% 42% / 43% 77% 23% 57%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundBlendMode: 'overlay'
        }}

        className={`h-[20rem] md:h-[25rem] lg:h-[35rem] w-[20rem] md:w-[25rem] lg:w-[35rem] bg-primary absolute md:-top-10 lg:-top-16 ${orientation == 'left' ? 'md:-left-24' : 'md:-right-24'}`}
      />
    </motion.div>
  );
}
export default FrenteShape;
