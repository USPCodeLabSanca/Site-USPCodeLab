import { devBoost } from 'src/assets'
import { Footer, HomeSection } from 'src/components'
import TextHighlight from 'src/components/TextHighlight/TextHightlight'

function Homepage() {
  return (
    <>
      <HomeSection />

      {/* exemplo de uso do título */}
      <TextHighlight
        title='Dev.Boost'
        fontStyle='text6xl md:text-7xl font-monteserrat font-semibold'
        img={devBoost}
        alt='devBoost logo'
      ></TextHighlight>

      <Footer/>
    </>
  )
}

export default Homepage