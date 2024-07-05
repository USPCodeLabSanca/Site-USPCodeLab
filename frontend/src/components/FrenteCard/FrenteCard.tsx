import { TextHighlight } from 'src/components';

interface FrenteCardProps {
  index?: number;
  title: string;
  subtitle: string;
  text: string;
  fontStyle: string;
  img?: string;
}

const FrenteCard: React.FC<FrenteCardProps> = ({ index, title, subtitle, text, fontStyle, img }) => {
    if(index == undefined) index = 0
    return (
    <div className="m-6 relative h-96">
      <div className={`absolute top-0 ${ index %2 ==0? 'right-0 lg:right-[10%]':'left-0 lg:left-[10%]'} `}>
        <div className="flex flex-col sm:w-min">
          <div className="w-min">
            <TextHighlight
              title={title}
              fontStyle="text-6xl md:text-7xl text-3xl font-montserrat font-semibold"
              img={img}
              alt={`${img} logo`}
            />
          </div>
          <div className="pl-10 py-10 md:w-full">
            <p className={`text-2xl pb-6 font-semibold ${fontStyle}`}>{subtitle}</p>
            <p className={`text-xl ${fontStyle}`}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenteCard;
