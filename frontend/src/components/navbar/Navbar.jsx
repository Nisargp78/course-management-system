import Logo from "./Logo";
import NavContainer from "./NavContainer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <NavContainer />
      </div>
    </nav>
  );
};

export default Navbar;