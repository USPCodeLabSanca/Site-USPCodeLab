import { devBoost } from 'src/assets'
import FrenteCard from 'src/components/FrenteCard/FrenteCard'

const FrenteSection : React.FC = () => {
    return (
        <FrenteCard
            title='Dev.Boost'
            subtitle='O grupinho dos códigos e projetos do Codelab!'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem nibh, varius id urna in, faucibus iaculis ex. Vivamus maximus mauris sem, vestibulum ultrices libero dictum in. Aenean sagittis tincidunt rhoncus. Vestibulum ut eros urna. Vivamus ut suscipit libero. Aliquam eget dapibus ante, sagittis imperdiet ipsum. Nulla vel erat purus. Nullam sed semper magna. Fusce elementum, enim a mollis fermentum, lectus nibh lacinia augue, et interdum tellus metus id erat. Maecenas ut iaculis nibh. Nam sed lobortis est. In suscipit tristique ex ac auctor.'
            fontStyle='font-poppins text-textLightGrey'
            img={devBoost}
        ></FrenteCard>
    )
}

export default FrenteSection