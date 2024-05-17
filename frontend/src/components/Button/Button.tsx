import React from 'react'

interface ButtonProps {
  content: string,
}

function Button({ content }: ButtonProps) {
  return (
    <>
      <button className='bg-primary text-white font-poppins font-medium w-full h-full text-center rounded-xl hover:bg-primaryDark active:bg-primaryDarker'>
        {content}
      </button>
    </>
  )
}

export default Button;