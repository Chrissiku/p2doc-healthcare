import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = ({ openModal }) => {
  return (
    <div className="w-full mx-auto px-[70px]">
      <NavBar openModal={openModal} />
      <Hero openModal={openModal} />
    </div>
  );
};

export default Header;
