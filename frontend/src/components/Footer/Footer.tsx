import React from 'react';

import { YoutubeIcon, InstagramIcon, TelegramIcon } from 'src/assets';

import Icon from '../Icon/Icon';

const Footer: React.FC = () => {
  return (
    <>
        <div className='w-full px-0 py-0 bg-grayBackground'>
            <div className='w-full flex flex-col items-center py-10 text-textLightGrey font-poppins '>
                <div className='font-bold text-2xl sm:text-3xl'>Embarque conosco!</div>
                <div className='text-sm sm:text-lg'>Fique conectado com o Codelab!</div>
                <div className='flex flex-row py-2 justify-between gap-4'>
                    <Icon style='w-10 sm:w-14' Image={YoutubeIcon} alt='Icone Youtube'></Icon>
                    <Icon style='w-10 sm:w-14' Image={InstagramIcon} alt='Icone Instagram'></Icon>
                    <Icon style='w-10 sm:w-14' Image={TelegramIcon} alt='Icone Telegram'></Icon>
                </div>
            </div>

            <div className='w-full flex flex-row justify-between px-10 py-5 bg-background text-textLightGrey text-xs font-poppins font-medium'>
                <div>Codelab - ICMC USP 2024</div>
                <div className='flex flex-row'>
                    <div>Desenvolvido por&nbsp;</div>
                    <div className='text-textLightBlueContrast'>Codelab&nbsp;</div>   
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Footer