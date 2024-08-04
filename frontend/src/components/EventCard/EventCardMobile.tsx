import { motion } from 'framer-motion';
import { Button, DateCard } from 'src/components';
import { EventCardMobileProps } from "src/types";

const EventCardMobile = ({ id, name, description, date, photo, ...props }: EventCardMobileProps) => {
  return (
    <motion.div className='bg-grayBackground cursor-pointer will-change-transform shadow-lg rounded-xl' key={id} layoutId={id}>
      <img className="rounded-t-xl" src={photo}></img>
      <div className="flex flex-col gap-1 p-3 font-monteserrat text-white">
        <DateCard date={new Date(date)} />
        <p className="text-xl font-bold">{name}</p>
        <div className="w-full h-7 mt-2">
          <Button content="ver mais" {...props}></Button>
        </div>
      </div>
    </motion.div>
  )
};

export default EventCardMobile