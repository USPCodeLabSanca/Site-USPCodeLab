import React from 'react';
import { Link } from "react-router-dom";

import { CodelabLogo, UspLogo, IcmcLogo} from 'src/assets'
import Icon from "../Icon/Icon";

const Header: React.FC = () => {
  return (
    <>
    <div className='bg-transparent/5 pl-4 pr-12 py-3'>
      <div className='flex w-full items-center'>
        <Link to='/' className='flex'>
          <Icon style="w-40 mx-1" Image={CodelabLogo} alt="Icone UspCodeLabSanca"/>
          <Icon style="h-5 w-12 mx-1 mt-5" Image={UspLogo} alt="Icone USP"/>
          <Icon style="h-5 w-12 mx-1 mt-5" Image={IcmcLogo} alt="Icone ICMC"/>
        </Link>
        <div className='flex ml-auto space-x-10'>
          <div className='font-montserrat text-white hover:font-bold'>
            <Link to='/events'>Eventos</Link>
          </div>
          <div className='font-montserrat text-white hover:font-bold'>
            <Link to='/projects'>Projetos</Link>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Header