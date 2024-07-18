import React from "react";
import Item from "../components/Item";
import { useSelector } from "react-redux";

const ShopCategory = (props) => {
  const { all_product } = useSelector((state) => state.data);

  return (
    <div className="">
      <img
        className="block my-7 mx-auto w-3/4"
        src={props.banner}
        alt="props.banner"
      />

      <div className="flex flex-wrap gap-7 md:gap-16 mb-6 justify-center">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
