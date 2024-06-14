import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-44">
        <h2 className="text-[#090909] text-2xl font-semibold">
          NEEW ARRIVALS ONLY
        </h2>
        <div className="">
          <div className="hand-hand-icon flex items-center gap-5">
            <p className="text-[#171717] text-8xl font-bold">new</p>
            <img className="w-28" src={hand_icon} alt="hand_icon" />
          </div>
          <p className="text-[#171717] text-8xl font-bold">collections</p>
          <p className="text-[#171717] text-8xl font-bold">for everyon</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-4 w-80 h-16 rounded-3xl mt-7 text-white text-xl bg-red-600">
          <div className="">Latest Collection</div>
          <img className="" src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex-1 flex items-center justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
