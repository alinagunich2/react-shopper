import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup ">
      <div className="loginsignup-conyainer  m-auto bg-white py-10 px-16">
        <h1 className=" my-5 mx-0 text-5xl">Sign up</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-8">
          <input c type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className=" h-20 text-white bg-red-400 mt-8 borde\ text-2xl font-medium cursor-pointer">
          Continue
        </button>
        <p className="loginsignup-login mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-semibold">Login</span>
        </p>
        <div className="loginsignup-agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
