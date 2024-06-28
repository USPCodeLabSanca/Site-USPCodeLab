

import {  shape1, shape2, shape3 } from "src/assets"

interface FrenteShapeProps {
  type: number;
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
    <div className="relative w-full">

      <div className="relative w-full">
        <img src={Shape.toString()} alt="Shape" className={`${orientation === 'left' ? '-translate-x-[12rem] sm:-translate-x-[20rem] md:-translate-x-[25rem] lg:-translate-x-[35rem]' : 'translate-x-[12rem] sm:translate-x-[20rem] md:translate-x-[25rem] lg:translate-x-[35rem] xl:translate-x-[35rem]'} h-100 transform`} /> 
      </div>
    </div>
  );
}
export default FrenteShape;
