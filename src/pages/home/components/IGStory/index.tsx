import Item from "./Item";

const IGStory: React.FC = () => {
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      <Item name="max" avatar="/images/avatars/a2.png" />
    </div>
  );
};

export default IGStory;