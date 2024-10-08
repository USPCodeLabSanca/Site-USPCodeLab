import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.7], [0, 1, 1, 0]);

  return (
    <section
      ref={targetRef}
      className="h-full flex flex-column items-center justify-center">
      <motion.div
        style={{ opacity }}
        className='hidden md:block w-2/3 font-poppins text-white font-normal text-base md:text-lg md:text-left md:mr-10 lg:text-xl'>{text}</motion.div>
      <motion.div
        style={{ opacity: opacityMobile }}
        className='block md:hidden w-2/3 font-poppins text-white font-normal text-base'>{text}</motion.div>
    </section>
  );
};

export default TextAnimation;
