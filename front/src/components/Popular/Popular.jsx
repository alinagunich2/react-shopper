import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular  flex  flex-col items-center gap-3 mb-11">
      <h1 className="text-[#171717] text-5xl font-semibold w-">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-52 h-1 rounded-xl bg-slate-700" />
      <div className="popular-item mt-12 justify-center flex flex-wrap gap-7">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
