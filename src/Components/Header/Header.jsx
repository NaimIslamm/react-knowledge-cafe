import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-8 border-b-2 max-w-7xl mx-auto mb-8">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="object-cover" src={profile} alt="" />
    </div>
  );
};

export default Header;
