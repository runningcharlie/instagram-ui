import Header from "../../components/IGHeader";
import IGContainer from "../../components/IGContainer";
import IGStory from "./components/IGStory";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]"></div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
