import { Header, Footer, HomeSection, WhoAreWeSection } from 'src/components'
import FrenteShape from 'src/components/FrenteShape/FrenteShape'

function Homepage() {
  return (
    <>
      <div className='bg-background overflow-x-hidden'>
        <Header />

        <HomeSection />
        <WhoAreWeSection />
        {/* <WhoAreWeSectionV3 /> */}
        {/* exemplo de uso do título */}
        {/* <TextHighlight
          title='Dev.Boost'
          fontStyle='text6xl md:text-7xl font-monteserrat font-semibold'
          img={devBoost}
          alt='devBoost logo'
        ></TextHighlight> */}
        <div className='relative flex flex-col'>
          <FrenteShape type={3} orientation='left' />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Homepage