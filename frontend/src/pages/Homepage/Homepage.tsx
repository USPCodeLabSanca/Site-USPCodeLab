import { devBoost } from 'src/assets'
import { InstagramIcon, GithubIcon, GithubDarkIcon, TelegramIcon, YoutubeIcon } from 'src/assets';
import { Footer, HomeSection, ImageScroll, TextHighlight } from 'src/components'

function Homepage() {
  const imageArray = [InstagramIcon, GithubIcon, GithubDarkIcon, TelegramIcon, YoutubeIcon]
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

      <ImageScroll images={imageArray}></ImageScroll>

      <Footer />
    </>
  )
}

export default Homepage