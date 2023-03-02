import Header from "../../components/IGHeader";
import IGContainer from "../../components/IGContainer";
import Loading from "../../components/Loading";

import IGStory from "./components/IGStory";
import IGPost from "./components/IGPost";
import IGProfile from "./components/IGProfile";
import { useGetIGPostsQuery } from "../../services/homeService";

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      ) : (
        data?.map((item) => <IGPost {...item} />)
      )}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
