import { Header, Footer, HomeSection, WhoAreWeSection } from 'src/components'

function Homepage() {
  return (
    <>
      <div className='bg-background'>
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

        <Footer />
      </div>
    </>
  )
}

export default Homepage