import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="w-full mx-auto px-[70px]">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
