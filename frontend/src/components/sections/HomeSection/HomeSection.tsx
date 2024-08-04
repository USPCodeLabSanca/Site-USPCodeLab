import React from 'react';

import { GithubIcon, logoSimplifiedWhiteColoured } from 'src/assets';
import { Button, TextHighlight } from 'src/components'
import { motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  // const targetRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 1]);
  // const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <>
      <motion.section
        // ref={targetRef}
        // style={{ opacity, scale, y }}
        className='h-screen relative flex items-center justify-center flex-col-reverse md:flex-row md:justify-around mb-16 md:mb-32 pt-16 md:px-12'
      >
        <div className='flex flex-row items-center'>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className='w-full px-8 md:h-screen flex flex-col gap-6 justify-center md:items-start items-center'>

            <div className='flex flex-col items-start lg:flex-row lg:items-end font-monteserrat mb-10'>
              <div className='text-6xl md:text-9xl font-medium text-white'>Code</div>
              <div className='flex items-end md:flex-col md:items-start lg:flex-row lg:items-end'>
                <div className='text-6xl md:text-9xl font-normal text-textGrey'>Lab</div>
                <div className='text-3xl md:text-5xl font-normal text-primary ml-2 mb-1 lg:mb-3 lg:ml-0'>sanca</div>
              </div>
            </div>

            <div className='flex flex-col gap-2 ml-2 md:ml-0 w-5/6 md:w-1/2 lg:w-full'>
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
                  element?.scrollIntoView({ behavior: "smooth", block: "start" })
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
        </div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className='mb-3 md:mb-0'>
          <img className='h-32 md:h-auto md:max-h-96' src={logoSimplifiedWhiteColoured}></img>
        </motion.div>
      </motion.section>
    </>

  )
}

export default HomeSection