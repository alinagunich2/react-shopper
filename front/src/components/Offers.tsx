import React from "react";
import exclusive_image from "./assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className=" px-5 mb-40 flex justify-center bg-custom-gradient">
      <div className=" py-20 mr-10 flex flex-col justify-center">
        <h2 className=" text-[#171717] text-3xl  sm:text-5xl md:text-7xl font-semibold">
          Exclusive
        </h2>
        <h2 className=" mb-6  text-[#171717] text-3xl  sm:text-5xl md:text-7xl font-semibold">
          Offers For You
        </h2>
        <p className="text-[#171717] text-base sm:text-xl md:text-2xl font-semibold ">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="hover:bg-red-500  transition-all duration-300 ease-in-out w-56 h-12 xs:w-64 xs:h-12 sm:w-80 sm:h-16 text-[14px] xs:text-[16px] sm:text-[20px] rounded-3xl bg-red-600 border-spacing-0 text-white text-2xl font-medium mt-8 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-img sm:flex items-end">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
};

export default Offers;
