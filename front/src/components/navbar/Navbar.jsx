import React, { useContext, useRef, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdoun from "../assets/dropdown_icon.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="flex gap-5 flex-wrap justify-around p-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <img
        onClick={dropdown_toggle}
        className="navigation-dropdown block md:hidden w-7 -rotate-90 duration-500"
        src={nav_dropdoun}
        alt="nav_dropdoun"
      />
      <ul
        ref={menuRef}
        className="hidden md:flex md:static absolute  md:top-0 sm:top-24 top-40 px-5 items-center gap-14 text-[#626262] text-xl font-medium bg-white justify-center"
      >
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>{" "}
          {menu === "shop" ? (
            <hr className=" border-none w-full h-1 rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link>{" "}
          {menu === "men" ? (
            <hr className=" border-none w-full h-1 rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link>{" "}
          {menu === "women" ? (
            <hr className=" border-none w-full h-1 rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>{" "}
          {menu === "kids" ? (
            <hr className=" border-none w-full h-1 rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11 w-">
        {localStorage.getItem("auth-token") ? (
          <button
            className="w-40 bg-blue-300 h-14  outline-0 text-xl font-medium rounded-3xl text-[#515151] border border-solid border-[#7a7a7a]"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className=" bg-white w-40 h-14 outline-0 text-xl font-medium border border-solid border-[#7a7a7a]">
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className=" w-5 h-5 flex justify-center items-center -mt-9 -ml-14 rounded-xl text-sm bg-red-500 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
