import { EventCard, Footer, Header, Parabola } from 'src/components';
import { hackfoolsImage0 } from 'src/assets';
import { useState } from 'react';

function Events() {
  const event = {
    date: {
      year: "2023",
      day: "14 de Abril"
    },
    title: "HackFools",
    content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
    image: [hackfoolsImage0],
  }

  const [h, setH] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setH(window.innerHeight);
  });

  // Generate an array of offsets [0, 300, 600, ..., 1800]
  const offsets = Array.from({ length: 15 }, (_, index) => index * h / 2 + h / 2);

  return (
    <div className='relative bg-background'>
      <Header />

      <div className='hidden lg:block -z-10'>
        <Parabola a={0.0004} b={-0.06} c={200} startX={0} endX={2000} step={1} h={h} />
      </div>
      <div className='hidden md:block lg:hidden'>
        <Parabola a={0.0006} b={-0.04} c={200} startX={0} endX={2000} step={1} h={h} />
      </div>
      <div className='block md:hidden'>
        <Parabola a={0.0007} b={-0.2} c={80} startX={0} endX={2000} step={1} h={h} />
      </div>

      <div
        className='absolute bg-gradient-to-tr from-white to-primary
        w-full py-48 md:pt-32 md:pb-24 text-center text-4xl md:text-6xl
        font-monteserrat font-bold text-background z-10'>EVENTOS</div>

      <div
        className='sticky bg-background z-0 font-monteserrat font-medium text-white text-center'
        style={{
          height: 4 / 5 * h,
          paddingTop: 7 / 10 * h
        }}>
        Aqui você encontra os nossos eventos passados!
      </div>

      <div
        className='flex flex-col items-start'>
        {offsets.map(offset => (
          <EventCard date={event.date} title={event.title} content={event.content} images={event.image} offset={offset} h={h} key={offset} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Events;