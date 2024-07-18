import React from "react";
import logo from "./assets/logo_big.png";
import inst_icon from "./assets/instagram_icon.png";
import pin_icon from "./assets/pintester_icon.png";
import whats_icon from "./assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Fooret = () => {
  return (
    <div className=" pt-7 px-5 flex-center-all flex-col gap-8 sm:gap-14">
      {/* <Link to="/"> */}
      <div className=" z-10 flex items-center gap-3">
        <img
          className="block w-10 h-10 xs:w-14 xs:h-14 sm:w-16 sm:h-16 "
          src={logo}
          alt="logo"
        />
        <p className=" text-[#171717] text-[23px] xs:text-[28px] sm:text-[38px] font-semibold">
          SHOPPER
        </p>
      </div>
      {/* </Link> */}
      <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[#252525] text-base sm:text-xl">
        <li className="cursor-pointer hover:border-gray-400 border-b-2 border-solid border-transparent transition-all duration-300 ease-in-out">
          Company
        </li>
        <li className="cursor-pointer hover:border-gray-400 border-b-2 border-solid border-transparent transition-all duration-300 ease-in-out">
          Products
        </li>
        <li className="cursor-pointer hover:border-gray-400 border-b-2 border-solid border-transparent transition-all duration-300 ease-in-out">
          Offices
        </li>
        <li className="cursor-pointer hover:border-gray-400 border-b-2 border-solid border-transparent transition-all duration-300 ease-in-out">
          About
        </li>
        <li className="cursor-pointer hover:border-gray-400 border-b-2 border-solid border-transparent transition-all duration-300 ease-in-out">
          Contact
        </li>
      </ul>
      <div className="flex gap-5">
        <div className="cursor-pointer p-3  bg-slate-200">
          <img
            className="block w-5 xs:w-6 sm:w-7"
            src={inst_icon}
            alt="inst_icon"
          />
        </div>
        <div className="cursor-pointer p-3 pb-2 bg-slate-200">
          <img
            className="block w-5 xs:w-6 sm:w-7"
            src={pin_icon}
            alt="pin_icon"
          />
        </div>
        <div className="cursor-pointer p-3 pb-2 bg-slate-200">
          <img
            className="block w-5 xs:w-6 sm:w-7"
            src={whats_icon}
            alt="whats_icon"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-full mb-9 text-[#1a1a1a] text-xl">
        <hr className="w-3/4 border-spacing-0 rounded-xl h-1 bg-slate-300" />
        <p className="text-base sm:text-xl">Copyright @2024</p>
      </div>
    </div>
  );
};

export default Fooret;
