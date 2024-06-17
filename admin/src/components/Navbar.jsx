import navlogo from "./../assets/nav-logo.svg";
import navProfile from "./../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-4 px-14  mb-1 bg-white">
      <img src={navlogo} alt="navlogo" />
      <img src={navProfile} alt="navProfile" />
    </div>
  );
};

export default Navbar;
