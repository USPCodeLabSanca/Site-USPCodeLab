import { devBoost } from 'src/assets'
import { devlearnImage0 } from 'src/assets'
import FrenteCard from 'src/components/FrenteCard/FrenteCard'


const frenteobject = [
    {
        "title": "Dev.Boost",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "logoImg": { devBoost },
        "bgImage": { devlearnImage0 }
    },
    {
        "title": "Dev.Learn",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "logoImg": { devBoost },
        "bgImage": { devlearnImage0 }

    },
    {
        "title": "Dev.Learn",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "logoImg": { devBoost },
        "bgImage": { devlearnImage0 }

    },
    {
        "title": "Dev.Learn",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "logoImg": { devBoost },
        "bgImage": { devlearnImage0 }

    },
    {
        "title": "Dev.Learn",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "logoImg": { devBoost },
        "bgImage": { devlearnImage0 }

    }
]

const FrenteSection: React.FC = () => {
    return (
        <div>
            <div className='mt-[10vh] text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary'>Frentes</div>
            <div className='mt-5 text-center text-base md:text-lg font-monteserrat font-medium text-white'>Conheça um pouco mais sobre o que nós desenvolvemos ;)</div>
            {frenteobject.map((frente, key) => {
                return (
                    <FrenteCard
                        key={key}
                        index={key}
                        title={frente.title}
                        subtitle={frente.subtitle}
                        text={frente.text}
                        fontStyle='font-poppins text-textLightGrey'
                        logoImg={devBoost}
                        image={devlearnImage0}
                    />
                )
            })}
        </div>
    )
}

export default FrenteSection