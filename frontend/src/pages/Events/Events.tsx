import { EventCard, Header } from 'src/components';

function Events() {
  const event = {
    date: {
      year: "2023",
      day: "14 de Abril"
    },
    title: "",
    content: "",
    image: [],
  }
  return (
    <div className='bg-background'>
      <Header />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
      <EventCard date={event.date} title={event.title} content={event.content} images={event.image} />
    </div>
  )
}

export default Events;