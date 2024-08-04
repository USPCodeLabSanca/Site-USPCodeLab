import { EventCard, EventCardMobile, EventCardMobileList, Parabola } from 'src/components';
import { Event } from 'src/types';
import { hackfoolsImage0, hackfoolsImage1, hackfoolsImage3, hackfoolsImage2 } from 'src/assets';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { API } from 'src/services';
import List from 'src/components/EventCard/EventMobileList';

const eventsExample: Event[] = [
  {
    date: (new Date()).toUTCString(),
    name: "HackFools",
    description: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    photo: hackfoolsImage0,
    id_event: '0',
  },
  {
    date: (new Date()).toUTCString(),
    name: "HackFools",
    description: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    photo: hackfoolsImage1,
    id_event: '1',
  },
  {
    date: (new Date()).toUTCString(),
    name: "HackFools",
    description: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    photo: hackfoolsImage2,
    id_event: '2',
  },
  {
    date: (new Date()).toUTCString(),
    name: "HackFools",
    description: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    photo: hackfoolsImage3,
    id_event: '3',
  },
  {
    date: (new Date()).toUTCString(),
    name: "HackFools",
    description: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    photo: hackfoolsImage0,
    id_event: '4',
  },
]

const EventSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  useEffect(() => {
    const getEvents = async () => {
      const result = await API.getEvents();
      setEvents(result);
    }
    getEvents();
  }, [])

  const [h, setH] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setH(window.innerHeight);
  });

  const [bgImage, setBgImage] = useState<string | null>(null);

  return (
    <section>
      <div className='hidden lg:block'>
        <AnimatePresence>
          {bgImage && (
            <motion.div
              key={bgImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute w-full h-full bg-cover"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0) 70%, #292524 90%), 
                                radial-gradient(circle at center, rgba(0,0,0,0) 0%, #292524 100%),
                                url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
              }}
            />
          )}
        </AnimatePresence>

        <div className='hidden lg:block -z-10'>
          <Parabola a={0.0004} b={-0.06} c={200} startX={0} endX={2000} step={1} h={h} />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Parabola a={0.0006} b={-0.04} c={200} startX={0} endX={2000} step={1} h={h} />
        </div>
        <div className='block md:hidden'>
          <Parabola a={0.0008} b={-0.2} c={90} startX={0} endX={2000} step={1} h={h} />
        </div>

        <div
          className='absolute bg-gradient-to-tr from-white to-primary
        w-full py-24 md:pt-32 md:pb-24 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background z-10'>EVENTOS</div>

        <div
          className='sticky z-0 font-monteserrat font-medium text-white text-center'
          style={{
            height: 4 / 5 * h,
            paddingTop: 7 / 10 * h
          }}>
        </div>

        <div
          className='flex flex-col items-start'>
          {eventsExample.map((event, index) => (
            <EventCard
              date={new Date(event.date)}
              title={event.name}
              content={event.description}
              image={event.photo}
              offset={index * h / 2 + h / 2}
              h={h}
              key={event.id_event}
              setBg={setBgImage} />
          ))}
        </div>

        <div className='h-40' />
      </div>

      <div className='block lg:hidden'>
        <div
          className='absolute bg-gradient-to-tr from-white to-primary
        w-full py-24 md:pt-32 md:pb-24 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background z-10'>EVENTOS</div>
        <div
          className='z-0 font-monteserrat py-32 font-medium text-white text-center'>
        </div>

        <EventCardMobileList events={eventsExample} />
      </div>

    </section>
  )
}

export default EventSection