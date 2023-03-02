import IGUser from "components/IGUser";
import { useAppSelector } from "../../../../hooks";

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 4); // 显示4个好友

  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <IGUser
        account="charlie"
        location="guangzhou"
        avatar="/images/avatar.png"
        size="medium"
      />
      <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
        You are following
      </p>
      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          // key 一定要放在最外层元素
          <div className="-mt-3" key={id}>
            <IGUser
              id={id}
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;
