import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CodelabLogo, UspLogo, IcmcLogo } from 'src/assets';
import { motion } from 'framer-motion';
import Icon from "../Icon/Icon";

const Header: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <motion.div
        className='fixed w-full p-5 md:pr-10 z-50 bg-background -mt-1'
        initial={{
          opacity: 1,
          y: 0
         }}
        animate={{
          opacity: scrollDirection === 'down' ? 0 : 1,
          y: scrollDirection === 'down' ? -80 : 1
        }}
        transition={{ duration: 0.25 }}
      >
        <div className='flex w-full items-center justify-between'>
          <Link to='/'>
            <motion.div className='flex'>
              <Icon style="w-40 mx-1" Image={CodelabLogo} alt="Icone UspCodeLabSanca" />
              <Icon style="h-5 hidden md:block w-12 px-1 pt-5" Image={UspLogo} alt="Icone USP" />
              <Icon style="h-5 hidden md:block w-12 px-1 pt-5" Image={IcmcLogo} alt="Icone ICMC" />
            </motion.div>
          </Link>
          <div className='flex w-40 md:w-52 justify-between'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='font-montserrat text-white text-center hover:font-medium w-full'
            >
              <Link to='/events'>Eventos</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='font-montserrat text-white text-center hover:font-medium w-full'
            >
              <Link to='/projects'>Projetos</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
