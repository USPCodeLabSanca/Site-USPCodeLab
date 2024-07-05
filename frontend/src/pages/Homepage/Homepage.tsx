
import { Header, Footer, HomeSection,  } from 'src/components'
import { FrenteSection, WhoAreWeSection } from 'src/components'

function Homepage() {
  return (
    <>
      <div className='bg-background overflow-x-hidden'>
        <Header />

        <HomeSection />
        <WhoAreWeSection />
        {/* <WhoAreWeSectionV3 /> */}
        {/* exemplo de uso do título */}

        <FrenteSection />

        <Footer />
      </div>
    </>
  )
}

export default Homepage