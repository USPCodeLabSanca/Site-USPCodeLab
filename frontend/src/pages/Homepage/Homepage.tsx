import { Button, Footer, ImageScroll } from 'src/components'
import { InstagramIcon, GithubIcon, GithubDarkIcon, TelegramIcon, YoutubeIcon } from 'src/assets';

function Homepage() {
  const imageArray = [ InstagramIcon, GithubIcon, GithubDarkIcon, TelegramIcon, YoutubeIcon]
  return (
    <>
      <div>Homepage</div>
      <div className='w-64 h-12'>
        <Button content='Ver Mais'></Button>
      </div>

        <ImageScroll images={imageArray}></ImageScroll>

      <Footer/>
    </>
  )
}

export default Homepage