import React, { useRef, useState } from "react";
import logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import nav_dropdoun from "./assets/dropdown_icon.svg";
import avatar from "./assets/avatar.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalItem } = useSelector((state) => state.data);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const dropdown = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  const onClickBurger = () => {
    if (window.innerWidth < 768) {
      menuRef.current.classList.remove("nav-menu-visible");
      dropdown.current.classList.remove("open");
    }
  };
  let [button, setButton] = useState(false);
  const logoutRef = useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(logoutRef.current);
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setButton(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-full flex z-10 flex-wrap justify-around gap-2 sm:gap-5 p-4 bg-white">
      <Link to="/">
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
      </Link>

      <img
        ref={dropdown}
        onClick={dropdown_toggle}
        className="navigation-dropdown z-10 relative block lg:hidden w-7 -rotate-90 duration-500"
        src={nav_dropdoun}
        alt="nav_dropdoun"
      />
      <ul
        ref={menuRef}
        className="hidden md:flex-row flex-col lg:flex md:static absolute  md:top-0 sm:top-24 top-40 px-5 items-center gap-7 lg:gap-14 text-[#626262] text-xl font-medium bg-white justify-center"
      >
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("shop");
            onClickBurger();
          }}
        >
          <Link to="/">Shop</Link>{" "}
          {menu === "shop" ? <hr className="hr-navigation" /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("men");
            onClickBurger();
          }}
        >
          <Link to="/mens">Men</Link>{" "}
          {menu === "men" ? <hr className="hr-navigation" /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("women");
            onClickBurger();
          }}
        >
          <Link to="/womens">Women</Link>{" "}
          {menu === "women" ? <hr className="hr-navigation" /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("kids");
            onClickBurger();
          }}
        >
          <Link to="/kids">Kids</Link>{" "}
          {menu === "kids" ? <hr className="hr-navigation" /> : <></>}
        </li>
      </ul>
      <div className="relative z-10 flex items-center gap-11 w-">
        {localStorage.getItem("auth-token") ? (
          <>
            <div className="">
              <div
                className="flex relative items-center cursor-pointer"
                onClick={() => setButton((prev) => !prev)}
              >
                <img className="block w-9 sm:w-11" src={avatar} alt="avatar" />
                <p className="ml-2 text-xl sm:text-2xl">
                  {localStorage.getItem("username")}
                </p>
              </div>

              {button && (
                <button
                  ref={logoutRef}
                  className=" absolute top-8 md:top-10  bg-black w-20 md:w-24 h-9 md:h-10 outline-0 text-base md:text-lg font-medium rounded-xl text-white border border-solid border-[#7a7a7a]"
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className=" bg-white rounded-md  w-24 h-9 xs:w-28 xs:h-11 sm:w-40 sm:h-14 outline-0 text-xl font-medium border border-solid border-[#7a7a7a]">
                Login
              </button>
            </Link>
          </>
        )}

        <Link to="/cart">
          <div className="flex items-center w-9 h-9 sm:w-12 sm:h-12">
            <img className=" w-full" src={cart_icon} alt="cart_icon" />
          </div>
        </Link>
        <div className=" w-5 h-5 flex justify-center items-center -mt-9 -ml-14 rounded-xl text-sm bg-red-500 text-white">
          {totalItem}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
