interface FrenteShapeProps {
  type: number; // o numero varia de 1 a 3 (3 opcoes de shape)
  image?: string; 
  orientation: 'left' | 'right';
}

function FrenteShape({ type, orientation, image }: FrenteShapeProps) {
  type = (type - 1) % 3; // garante 0, 1 ou 2

  return (
    <div className="w-full flex items-center justify-center relative">
    
      <div 
        style={{
          borderRadius: type === 0 ? "35% 65% 70% 30% / 30% 77% 23% 70% " : type === 1 ? "40% 60% 32% 68% / 68% 28% 72% 32%" : "50% 50% 58% 42% / 43% 77% 23% 57%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundBlendMode: 'overlay'
        }}
        
        className={`h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] bg-primary md:visible invisible absolute top-0 sm:-top-6 md:-top-10 lg:-top-16 ${orientation == 'left'?'-left-36':'-right-36'}`}
      />
    </div>
  );
}
export default FrenteShape;
