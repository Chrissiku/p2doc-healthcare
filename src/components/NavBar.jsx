const NavBar = () => {
  return (
    <nav className="w-full mx-auto p-8">
      <div className="w-full flex flex-row items-center justify-around">
        <a href="/" className="uppercase flex flex-col -space-y-4">
          <span className="text-olive-green font-bold text-[36px]">p2doc</span>
          <span className="text-og-blue text-[18px] font-medium">
            healthcare
          </span>
        </a>
        <div
          className="capitalize flex flex-row items-center justify-center space-x-10 text-[18px] 
        text-dark-gray font-medium"
        >
          <a href="/">about</a>
          <a href="/">services</a>
          <a href="/">contact</a>
        </div>
        <div>
          <button
            type="button"
            className="text-[18px] bg-og-blue text-black rounded-full py-2 px-4 font-semibold p-3"
          >
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
