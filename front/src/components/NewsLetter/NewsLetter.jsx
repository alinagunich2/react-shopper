import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="naesLetter pt-20 flex flex-col items-center justify-center m-auto px-36 mb-36 gap-7">
      <h1 className="text-[#454545] text-5xl font-semibold">
        GetExclusive Ofeers On Your Email
      </h1>
      <p className="text-[#454545] text-xl">
        Subscribe to our newletter and stay updated
      </p>
      <div className="input  flex items-center justify-between bg-white w-[500px] h-16 rounded-3xl">
        <input
          className="  ml-8 border-spacing-0 outline-none text-[#616161] text-base"
          type="email"
          placeholder="Your Email id"
        />
        <button className="w-52 h-16 rounded-3xl bg-black text-white text-base cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
