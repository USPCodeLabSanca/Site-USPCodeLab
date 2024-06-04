import { Header, Footer, HomeSection, WhoAreWeSectionV2 } from 'src/components'

function Homepage() {
  return (
    <>
      <div className='bg-background'>
        <Header />

        <HomeSection />
        {/* <WhoAreWeSection /> */}
        <WhoAreWeSectionV2 />
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