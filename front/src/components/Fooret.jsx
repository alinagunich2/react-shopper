import React from "react";
import footer_logo from "./assets/logo_big.png";
import inst_icon from "./assets/instagram_icon.png";
import pin_icon from "./assets/pintester_icon.png";
import whats_icon from "./assets/whatsapp_icon.png";

const Fooret = () => {
  return (
    <div className="flex-center-all flex-col gap-14">
      <div className="flex items-center gap-5">
        <img className="" src={footer_logo} alt="footer_logo" />
        <p className="text-[#383838] text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex gap-12 text-[#252525] text-xl">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-3 pb-2 bg-slate-200">
          <img src={inst_icon} alt="inst_icon" />
        </div>
        <div className="p-3 pb-2 bg-slate-200">
          <img src={pin_icon} alt="pin_icon" />
        </div>
        <div className="p-3 pb-2 bg-slate-200">
          <img src={whats_icon} alt="whats_icon" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-full mb-9 text-[#1a1a1a] text-xl">
        <hr className="w-3/4 border-spacing-0 rounded-xl h-1 bg-slate-300" />
        <p>Copyright @2023</p>
      </div>
    </div>
  );
};

export default Fooret;
