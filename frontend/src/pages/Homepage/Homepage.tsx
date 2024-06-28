import { Header, Footer, HomeSection, WhoAreWeSectionV2, FrenteSection } from 'src/components'

function Homepage() {
  return (
    <>
      <div className='bg-background'>
        <Header />

        <HomeSection />
        {/* <WhoAreWeSection /> */}
        <WhoAreWeSectionV2 />
        {/* exemplo de uso do título */}

        <FrenteSection />

        <Footer />
      </div>
    </>
  )
}

export default Homepage