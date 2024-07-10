import React, { useRef, useState } from "react";
import logo from "./assets/logo.png";
import burger from "./assets/burger.svg";
import cross from "./assets/cross.png";
import cart_icon from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
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
    window.scrollTo(0, 0);
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
        className="navigation-dropdown  block lg:hidden w-7 "
        src={burger}
        alt="nav_dropdoun"
      />
      <div ref={menuRef} className="menu bg-white ">
        <img
          onClick={dropdown_toggle}
          className="w-7 absolute top-10 right-10"
          src={cross}
          alt="nav_dropdoun"
        />
        <ul className=" flex flex-col gap-5 lg:flex-row text-center  text-[#626262] text-xl font-medium ">
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("shop");
              onClickBurger();
            }}
          >
            <Link
              className={menu === "shop" ? "border-b-2  border-red-600" : ""}
              to="/"
            >
              Shop
            </Link>{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("men");
              onClickBurger();
            }}
          >
            <Link
              className={menu === "men" ? "border-b-2  border-red-600" : ""}
              to="/mens"
            >
              Men
            </Link>{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("women");
              onClickBurger();
            }}
          >
            <Link
              className={menu === "women" ? "border-b-2  border-red-600" : ""}
              to="/womens"
            >
              Women
            </Link>{" "}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("kids");
              onClickBurger();
            }}
          >
            <Link
              className={menu === "kids" ? "border-b-2  border-red-600" : ""}
              to="/kids"
            >
              Kids
            </Link>{" "}
          </li>
        </ul>
      </div>

      <div className=" flex items-center gap-11 w-">
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
                    localStorage.removeItem("username");
                    localStorage.removeItem("data");
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
