import { EventCard, Footer, Header, Parabola } from 'src/components';
import { hackfoolsImage0, hackfoolsImage1, hackfoolsImage3, hackfoolsImage2 } from 'src/assets';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchAPI } from 'src/services';

function Events() {
  const eventArray = [
    {
      date: new Date(),
      title: "HackFools",
      content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
      image: hackfoolsImage0,
    },
    {
      date: new Date(),
      title: "HackFools",
      content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
      image: hackfoolsImage1,
    }, {
      date: new Date(),
      title: "HackFools",
      content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
      image: hackfoolsImage2,
    }, {
      date: new Date(),
      title: "HackFools",
      content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
      image: hackfoolsImage3,
    }, {
      date: new Date(),
      title: "HackFools",
      content: "Hackathon voltado para alunos do 1º ano de Ciências da Computação. Em um fim de semana cheio de inovação, os participantes criaram projetos incríveis, aprenderam com mentores experientes e colaboraram com colegas. Foi uma oportunidade única para mostrar talentos e aprimorar habilidades.",
      image: hackfoolsImage0,
    },
  ]

  const [h, setH] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setH(window.innerHeight);
  });

  const [bgImage, setBgImage] = useState<string | null>(null);

  return (
    <div
      className='relative bg-center bg-background'>
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
        className='sticky z-0 font-monteserrat font-medium text-white text-center'
        style={{
          height: 4 / 5 * h,
          paddingTop: 7 / 10 * h
        }}>
      </div>

      <div
        className='flex flex-col items-start'>
        {eventArray.map((event, index) => (
          <EventCard
            date={event.date}
            title={event.title}
            content={event.content}
            image={event.image}
            offset={index * h / 2 + h / 2}
            h={h}
            key={index}
            setBg={setBgImage} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Events;
