import React from "react";

const NewsLetter = () => {
  return (
    <div className=" bg-custom-gradient pt-20 flex flex-col items-center justify-center m-auto px-36 mb-36 gap-7">
      <h1 className="text-[#454545] text-5xl font-semibold">
        GetExclusive Ofeers On Your Email
      </h1>
      <p className="text-[#454545] text-xl">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[500px] h-16 rounded-3xl">
        <input
          className="border border-solid border-[#v] ml-8 border-spacing-0 outline-none text-[#616161] text-base"
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
