import React from "react";

const ContributeSection: React.FC = () => {
  return (
    <div className="my-16 md:my-32" id="contribute">
      <div className='text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary'>Como participar?</div>
      <div className='mt-5 text-center text-base md:text-lg font-monteserrat font-medium text-white'>Descubra como trabalhar conosco!</div>

      <div className="h-full my-6 flex flex-col items-center">
        <p className={`text-lg text-center md:text-2xl p-8 md:px-12 font-normal font-poppins text-textLightGrey`}>
          O processo é simples: <br /><span className="font-semibold">Basta possuir vontade de aprender!</span></p>
        <p className={`text-sm text-center md:text-base p-6 md:px-24 font-normal font-poppins text-textLightGrey`}>
          Pensando nisso, oferecemos um curso de Web Básico todo semestre ímpar, aberto a todos que desejam mergulhar no mundo do desenvolvimento. 
          <br />Durante o curso, você terá a oportunidade de explorar seu interesse em se tornar um desenvolvedor, criando um projeto próprio.
          <br />Além de adquirir novos conhecimentos, essa experiência permitirá que você se torne um codelaber e faça parte da nossa comunidade de aprendizado e inovação!
        </p>
        <p className={`text-lg text-center md:text-2xl p-8 md:p-6 font-semibold font-poppins text-textLightGrey`}>
          Venha descobrir suas habilidades e se juntar a nós nessa jornada tecnológica!
        </p>
      </div>
    </div>
  )
}

export default ContributeSection