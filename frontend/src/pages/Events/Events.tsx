import { EventCard, Footer, Header } from 'src/components';
import { hackfoolsImage0 } from 'src/assets';

function Events() {
  const event = {
    date: {
      year: "2023",
      day: "14 de Abril"
    },
    title: "",
    content: "",
    image: [hackfoolsImage0],
  }
  return (
    <div className='bg-background overflow-hidden'>
      <Header />
      <div className='fixed ellipse bg-primary'></div>
      <div className='fixed ellipse-background bg-background'></div>
      <div
        className='bg-gradient-to-tr from-white to-primary
        w-full p-24 mb-32 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background'>EVENTOS</div>

      <div className='flex flex-col items-start'>
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={0} />
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={200} />
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={400} />
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={600} />
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={800} />
        <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={1000} />
      </div>
      <Footer />
    </div>
  )
}

export default Events;