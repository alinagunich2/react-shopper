import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.svg";
import Item from "../components/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <img
        className="block my-7 mx-auto w-3/4"
        src={props.banner}
        alt="props.banner"
      />

      <div className="flex flex-wrap gap-3 mb-6 justify-center">
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
