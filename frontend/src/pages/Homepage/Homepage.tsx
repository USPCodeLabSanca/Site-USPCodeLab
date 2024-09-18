import {
  Header,
  Footer,
  HomeSection,
  WhoAreWeSectionV4,
  FrenteSection,
  ContributeSection,
} from "src/components";

function Homepage() {
  return (
    <>
      <div className="bg-background">
        <Header />
        <HomeSection />

        <WhoAreWeSectionV4 />
        <div className="overflow-hidden">
          <FrenteSection />
        </div>

        <ContributeSection />

        <Footer />
      </div>
    </>
  );
}

export default Homepage;
