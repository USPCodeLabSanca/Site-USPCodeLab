import {  shape1, shape2, shape3 } from "src/assets"

interface FrenteShapeProps {
  type: 1 | 2 | 3; // o numero varia de 1 a 3 (3 opcoes de shape)
  image?: string; // a ideia é no futuro colocar imagem de fundo
  orientation: 'left' | 'right';
}

function FrenteShape({ type, orientation }: FrenteShapeProps) {
  type = (type - 1) % 3; // garante 0, 1 ou 2

  let Shape;
  switch (type) {
    case 0:
      Shape = shape1;
      break;
    case 1:
      Shape = shape2;
      break;
    case 2:
      Shape = shape3;
      break;
    default:
      Shape = shape1;
  }

  return (
    <div className="w-full flex items-center justify-center">
        <img 
          src={Shape.toString()} 
          alt="Shape" 
          className={` ${orientation === 'left' ? '-translate-x-[10rem] sm:-translate-x-[20rem] md:-translate-x-[25rem] lg:-translate-x-[45rem]' : 'translate-x-[10rem] sm:translate-x-[20rem] md:translate-x-[25rem] lg:translate-x-[45rem]'} h-[60rem] transform`}/> 
    </div>
  );
}
export default FrenteShape;
