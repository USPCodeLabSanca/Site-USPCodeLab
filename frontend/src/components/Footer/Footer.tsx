import React from 'react';

import { YoutubeIcon, InstagramIcon, TelegramIcon } from 'src/assets';

import Icon from '../Icon/Icon';

const Footer: React.FC = () => {
  return (
    <>
      <div className='relative w-full px-0 py-0 bg-grayBackground'>
        <div className='w-full flex flex-col items-center py-10 text-textLightGrey font-poppins'>
          <div className='font-bold text-2xl sm:text-3xl'>Embarque conosco!</div>
          <div className='text-sm sm:text-lg'>Fique conectado com o Codelab!</div>
          {/* icones */}
          <div className='flex flex-row py-2 justify-between gap-4'>
            <Icon title='Link to youtube' style='w-10 sm:w-14' Image={YoutubeIcon} alt='Icone Youtube' link='http://www.youtube.com/@uspcodelabsaocarlos1316'></Icon>
            <Icon title='Link to instagram' style='w-10 sm:w-14' Image={InstagramIcon} alt='Icone Instagram' link='https://www.instagram.com/uspcodelabsanca/'></Icon>
            <Icon title='Link to telegram group' style='w-10 sm:w-14' Image={TelegramIcon} alt='Icone Telegram' link='https://t.me/uspcodelabsaocarlos'></Icon>
          </div>
        </div>

        <div className='w-full flex flex-row justify-between px-10 py-5 bg-background text-textLightGrey text-xs font-poppins font-medium overflow-hidden'>
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