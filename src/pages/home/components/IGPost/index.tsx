import IGUser from "components/IGUser";

type IGPostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
}) => {
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} alt="" />
    </div>
  );
};

export default IGPost;
