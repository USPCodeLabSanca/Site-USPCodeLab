import FrenteCard from "src/components/FrenteCard/FrenteCard";
import { useData } from "src/contexts/DataContext";

const FrenteSection: React.FC = () => {
  const { groups } = useData();

  return (
    <div>
      <div className="mt-[10vh] text-center text-4xl md:text-6xl font-monteserrat font-medium text-primary">
        Frentes
      </div>
      <div className="mt-5 text-center text-base md:text-lg font-monteserrat font-medium text-white">
        Conheça um pouco mais sobre o que nós desenvolvemos ;)
      </div>
      {groups.map((group, key) => {
        return (
          <FrenteCard
            key={key}
            index={key}
            title={group.name}
            subtitle={group.subtitle}
            text={group.description}
            fontStyle="font-poppins text-textLightGrey"
            logoImg={group.logo}
            image={group.image}
          />
        );
      })}
    </div>
  );
};

export default FrenteSection;
