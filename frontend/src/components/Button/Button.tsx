import { motion } from 'framer-motion';

interface ButtonProps {
  content: string,
  onClick?: () => void,
}

function Button({ content, onClick }: ButtonProps) {
  return (
    <>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale:0.95 }}
        className='bg-primary text-white font-poppins font-medium text-sm w-full h-full text-center rounded-xl hover:bg-primaryDark active:bg-primaryDarker'>
        {content}
      </motion.button>
    </>
  )
}

export default Button;