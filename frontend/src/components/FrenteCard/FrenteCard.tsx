import { TextHighlight } from 'src/components'

interface FrenteCardProps {
    title: string
    subtitle: string
    text: string
    fontStyle: string
    img?: string
}

const FrenteCard: React.FC<FrenteCardProps> = ({ title, subtitle, text, fontStyle, img } : FrenteCardProps) => {
    return (
        <div className='m-6'>
            <div className='pb-2'>
                <TextHighlight
                    title={title}
                    fontStyle='text6xl md:text-7xl font-monteserrat font-semibold'
                    img={img}
                    alt={`${img} logo`}
                ></TextHighlight>
            </div>
            <div className="relative p-10 md:w-4/6">
                <div className={`text-2xl pb-6 font-semibold ${fontStyle}`}>{subtitle}</div>
                <div className={`text-xl ${fontStyle}`}>{text}</div>
            </div>
        </div>
    )
}

export default FrenteCard