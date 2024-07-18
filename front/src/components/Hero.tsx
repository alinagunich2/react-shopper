import hand_icon from "./assets/hand_icon.png";
import arrow_icon from "./assets/arrow.png";
import hero_image from "./assets/hero_image.png";

const Hero = () => {
  return (
    <div className="  h-[100vh] bg-custom-gradient flex items-center flex-wrap ">
      <div className=" pl-14 xs:pl-20 md:pl-44 flex-1 flex flex-col  justify-center gap-5 ">
        <h2 className="text-[#090909] text-base xs:text-lg sm:text-xl md:text-2xl font-semibold">
          NEEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold">
              new
            </p>
            <img
              className="w-16 xs:w-20 sm:w-24 md:w-28"
              src={hand_icon}
              alt="hand_icon"
            />
          </div>
          <p className="text-[#171717] text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold">
            collections
          </p>
          <p className="text-[#171717] text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold">
            for everyon
          </p>
        </div>
        <button className=" cursor-pointer hover:bg-red-500  transition-all duration-300 ease-in-out flex-center-all gap-4 w-56 h-12 xs:w-64 xs:h-12 sm:w-80 sm:h-16 rounded-3xl mt-7 text-white text-xl bg-red-600">
          <div className="text-[14px] xs:text-[16px] sm:text-[20px]">
            Latest Collection
          </div>
          <img
            className="block h-2 w-4 xs:h-3 xs:w-5 sm:h-4 sm:w-6 "
            src={arrow_icon}
            alt=""
          />
        </button>
      </div>
      <div className=" hero-img  lg:flex flex-1">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
