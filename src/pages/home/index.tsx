import Header from "../../components/IGHeader";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex lg:justify-center">
        {/* left */}
        <div className="w-full lg:w-[600px]"></div>
        {/* right */}
        <div className="hidden lg:block lg:w-[424px]"></div>
      </div>
    </>
  );
};

export default Home;
