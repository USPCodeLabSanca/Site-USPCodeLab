import { EventSection, Footer, Header } from 'src/components';

/*
date: string,
    name: string,
    description: string,
    photo: string,
    id_event: number,
*/

function Events() {
  return (
    <div
      className='relative bg-center bg-background'>
      <Header />
      <EventSection />
      <Footer />
    </div>
  )
}

export default Events;
