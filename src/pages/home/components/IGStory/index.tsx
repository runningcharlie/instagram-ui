import { useEffect, useState } from "react";
import Item from "./Item";
// import Loading from "../../../../components/Loading";
// import { useGetIGStoiesQuery } from "services/homeService";

const IGStory: React.FC = () => {
  // const { data, isLoading } = useGetIGStoiesQuery("all");

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("api/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {stories.map((item) => {
        const { id, name, avatar } = item;
        return <Item key={id} name={name} avatar={avatar} />;
      })}
    </div>
  );
};

export default IGStory;
