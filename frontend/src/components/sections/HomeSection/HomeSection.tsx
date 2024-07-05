import React, { useRef } from 'react';

import { GithubIcon, logoSimplifiedWhiteColoured } from 'src/assets';
import { Button, TextHighlight } from 'src/components'
import { useScroll, useTransform, motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <>
      <motion.section
        ref={targetRef}
        style={{ opacity, scale, y }}
        className='relative h-[100vh] overflow-hidden'
      >
        <div
          className=' flex flex-row items-center justify-items-start pt-5'>
          <motion.div
            animate={{ x: 100 }}
            transition={{ duration: 2 }}
            className='w-full h-screen ml-[-100px] md:ml-0 p-8 md:p-24 md:pr-12 md:pl-0 flex flex-col gap-8 md:gap-5 justify-center'>
            <div className='flex flex-col items-start md:flex-row md:items-end'>
              <div className='text-8xl md:text-9xl font-monteserrat font-medium text-white'>Code</div>
              <div className='text-8xl md:text-9xl font-monteserrat font-normal text-textGrey'>Lab</div>
              <div className='text-2xl md:text-3xl font-monteserrat font-normal text-primary ml-2 mb-3 md:ml-0'>sanca</div>
            </div>
            <div className='flex flex-col gap-2 ml-2 md:ml-0'>
              <div className='text-base md:text-xl font-monteserrat font-medium text-white flex flex-wrap gap-1'>
                O Grupo de
                <TextHighlight title='Desenvolvimento' fontStyle='text-base md:text-xl font-monteserrat font-medium' />
                da
                <TextHighlight title='USP São Carlos' fontStyle='text-base md:text-xl font-monteserrat font-medium' />
              </div>
              <p className='text-sm md:text-base md:w-96 text-textGrey font-monteserrat font-medium'>O USPCodeLab (UCL) é um grupo de extensão universitário que tem por missão estimular a inovação tecnológica na USP</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='w-52 md:w-64 h-10 my-6'>
                <Button content='Conhecer Agora!' onClick={() => {
                  const element = document.querySelector("#whoAreWe");
                  element?.scrollIntoView({behavior: "smooth", block: "center"})
                }}></Button>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex flex-row' target="_blank" href="https://github.com/USPCodeLabSanca">
                <img className='w-8 h-8 text-xs' src={GithubIcon.toString()} alt='Icone Github' />
                <div className='text-white hidden md:block mt-4 ml-0.5 font-poppins text-sm'>Github</div>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            animate={{ x: -150 }}
            transition={{ duration: 2 }}
            className='absolute -right-32'>
            <img className='w-24 mb-40 md:mb-0 md:w-64' src={logoSimplifiedWhiteColoured}></img>
          </motion.div>
        </div>
      </motion.section>
    </>

  )
}

export default HomeSection