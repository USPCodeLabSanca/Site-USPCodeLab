import React from 'react';

import { GithubIcon, logoSimplifiedWhiteColoured } from 'src/assets';
import Button from '../Button/Button';
import TextHighlight from '../TextHighlight/TextHightlight';

const HomeSection: React.FC = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-items-start'>
        <div className='w-full h-screen p-8 md:p-24 md:pr-12 bg-background flex flex-col gap-8 md:gap-5 justify-center'>
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
            <p className='text-sm md:text-base md:w-1/2 text-textGrey font-monteserrat font-medium'>O USPCodeLab (UCL) é um grupo de extensão universitário que tem por missão estimular a inovação tecnológica na USP</p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-52 md:w-64 h-10 my-6'>
              <Button content='Conhecer Agora!'></Button>
            </div>
            <a className='flex flex-row' target="_blank" href="https://github.com/USPCodeLabSanca">
              <img className='w-8 h-8 text-xs' src={GithubIcon.toString()} alt='Icone Github' />
              <div className='text-white hidden md:block mt-4 ml-0.5 font-poppins text-sm'>Github</div>
            </a>
          </div>
        </div>
        <div className='text-right -mr-32'>
          <img src={logoSimplifiedWhiteColoured}></img>
        </div>
      </div>
    </>

  )
}

export default HomeSection