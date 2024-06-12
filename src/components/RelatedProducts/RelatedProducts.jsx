import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="relatedproducts  flex flex-col items-center gap-3">
      <h1 className="text-[#171717] text-5xl font-semibold">
        Telated Products
      </h1>
      <hr className="w-52" />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
