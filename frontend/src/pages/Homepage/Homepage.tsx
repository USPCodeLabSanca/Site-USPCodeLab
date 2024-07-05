import { Header, Footer, HomeSection, WhoAreWeSectionV4 } from 'src/components'
import FrenteShape from 'src/components/FrenteShape/FrenteShape'

function Homepage() {
  return (
    <>
      <div className='bg-background'>
        <Header />
        <HomeSection />
        <WhoAreWeSectionV4 />
        <div className='relative flex flex-col overflow-hidden'>
          <FrenteShape type={3} orientation='left' />
          <FrenteShape type={3} orientation='right' />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Homepage