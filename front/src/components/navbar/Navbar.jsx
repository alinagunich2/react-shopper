import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdoun from "../assets/dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar flex gap-5 flex-wrap justify-around p-4">
      <div className="nav-logo flex items-center gap-3">
        <img src={logo} alt="logo" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdoun}
        alt="nav_dropdoun"
      />
      <ul
        ref={menuRef}
        className="nav-menu flex items-center gap-14 text-[#626262] text-xl font-medium"
      >
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11 w-">
        {localStorage.getItem("auth-token") ? (
          <button
            className="logout w-40 bg-blue-300 h-14  outline-0 text-xl font-medium  "
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="login w-40 h-14 outline-0 text-xl font-medium ">
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count w-5 h-5 flex justify-center items-center -mt-9 -ml-14 rounded-xl text-sm">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
