
import { Header, Footer, HomeSection, WhoAreWeSectionV4, FrenteSection } from 'src/components'

function Homepage() {
  return (
    <>
      <div className='bg-background'>
        <Header />
        <HomeSection />

        <WhoAreWeSectionV4 />
        <div className='mt-40
        '>
          <FrenteSection />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Homepage