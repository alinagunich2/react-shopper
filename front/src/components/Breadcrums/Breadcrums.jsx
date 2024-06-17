import React from "react";
import arrow_icom from "../assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-wrap items-center gap-2 text-[#5e5e5e] text-base font-semibold my-16 mx-44 capitalize">
      HOME <img src={arrow_icom} alt="" /> SHOP <img src={arrow_icom} alt="" />
      {product.category} <img src={arrow_icom} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
