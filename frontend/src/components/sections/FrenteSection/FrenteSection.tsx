import { devBoost } from 'src/assets'
import FrenteCard from 'src/components/FrenteCard/FrenteCard'


const frenteobject = [
    {
        "title": "Dev.Boost",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "img": {devBoost}
    },
    {
        "title": "Dev.Learn",
        "subtitle": "O grupinho dos códigos e projetos do Codelab!",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in.",
        "img": {devBoost}
    }
]

const FrenteSection : React.FC = () => {
    return(
        frenteobject.map((frente, key) => {
    
            return(
                <FrenteCard
                key={key}
                index={key}
                title={frente.title}
                subtitle={frente.subtitle}
                text={frente.text}
                fontStyle='font-poppins text-textLightGrey'
                img={devBoost}
                />  
            )
        })
    )
}

export default FrenteSection