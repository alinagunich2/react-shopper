import React from "react";

const NewsLetter = () => {
  return (
    <div className="m-auto px-36 mb-36 gap-7 flex-center-all flex-col bg-custom-gradient pt-20">
      <h1 className="text-[#454545] text-5xl font-semibold">
        GetExclusive Ofeers On Your Email
      </h1>
      <p className="text-[#454545] text-xl">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex justify-between border border-solid border-[#616161] bg-white w-[500px] rounded-3xl">
        <input
          className="h-16 ml-8 outline-none text-[#616161] text-base"
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
