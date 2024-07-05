<<<<<<< HEAD
import { Header, Footer, HomeSection, WhoAreWeSectionV2, FrenteSection } from 'src/components'
=======
import { Header, Footer, HomeSection, WhoAreWeSection } from 'src/components'
import FrenteShape from 'src/components/FrenteShape/FrenteShape'
>>>>>>> 029363a8a28880bbff6be5ede3925e39f4988fc2

function Homepage() {
  return (
    <>
      <div className='bg-background overflow-x-hidden'>
        <Header />

        <HomeSection />
        <WhoAreWeSection />
        {/* <WhoAreWeSectionV3 /> */}
        {/* exemplo de uso do título */}
<<<<<<< HEAD

        <FrenteSection />

=======
        {/* <TextHighlight
          title='Dev.Boost'
          fontStyle='text6xl md:text-7xl font-monteserrat font-semibold'
          img={devBoost}
          alt='devBoost logo'
        ></TextHighlight> */}
        <div className='relative flex flex-col '>
          <FrenteShape type={3} orientation='left' />
          <FrenteShape type={3} orientation='right' />
        </div>
>>>>>>> 029363a8a28880bbff6be5ede3925e39f4988fc2
        <Footer />
      </div>
    </>
  )
}

export default Homepage