import { motion } from 'framer-motion';
import { FrenteShape, TextHighlight } from 'src/components';

interface FrenteCardProps {
  index?: number;
  title: string;
  subtitle: string;
  text: string;
  fontStyle: string;
  logoImg?: string;
  image?: string;
}

const FrenteCard: React.FC<FrenteCardProps> = ({ index, title, subtitle, text, fontStyle, logoImg, image }) => {
  if (index == undefined) index = 0
  return (
    <div className="p-6 relative h-3/4 my-16 md:my-64 grid md:grid-cols-2 md:grid-rows-1 grid-rows-2">
      <FrenteShape type={index} orientation={index % 2 == 0 ? 'left' : 'right'} image={image} />
      <motion.div
        initial={index % 2 != 0 ?
          { x: -250, rotate: -10, } :
          { x: 250, rotate: 10 }}
        whileInView={{ x: 0, rotate: 0 }}
        exit={index % 2 != 0 ?
          { x: -250, rotate: -10, } :
          { x: 250, rotate: 10 }}
        transition={{
          duration: 1,
          type: 'spring'
        }}
        className={`${index % 2 == 0 ? 'md:col-start-2' : 'md:col-start-1'} `}>
        <div className="flex flex-col">
          <div className="w-min">
            <TextHighlight
              title={title}
              fontStyle="text-4xl md:text-7xl font-montserrat font-semibold"
              img={logoImg}
              alt={`${logoImg} logo`}
            />
          </div>
          <div className="px-10 md:pr-0 py-10 md:w-full">
            <p className={`text-lg md:text-2xl pb-6 font-semibold ${fontStyle}`}>{subtitle}</p>
            <p className={`text-base md:text-xl ${fontStyle}`}>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FrenteCard;
