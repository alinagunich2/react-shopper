import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[#171717] text-5xl font-semibold">
        Related Products
      </h1>
      <hr className="w-52 h-2 rounded-lg bg-gray-700" />
      <div className="mt-11 flex gap-8 flex-wrap justify-center">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
