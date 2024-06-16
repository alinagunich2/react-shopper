// import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col pt-8 gap-5 w-full max-w-60 h-screen bg-white">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item flex items-center justify-center my-0 mx-5 py-1 px-3 rounded-md bg-slate-100 gap-5 cursor-pointer">
          <img src={add_product_icon} alt="add_product_icon" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item flex items-center justify-center my-0 mx-5 py-1 px-3 rounded-md bg-slate-100 gap-5 cursor-pointer">
          <img src={list_product_icon} alt="add_product_icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
