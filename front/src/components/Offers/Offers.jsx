import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers flex m-auto px-40 mb-40 bg-custom-gradient">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className=" text-[#171717] text-7xl font-semibold">Exclusive</h1>
        <h1 className=" text-[#171717] text-7xl font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-2xl font-semibold ">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-72 h-16 rounded-3xl bg-red-600 border-spacing-0 text-white text-2xl font-medium mt-8 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center pt-12">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
};

export default Offers;
