import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.svg";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <img
        className="block my-7 mx-auto w-3/4"
        src={props.banner}
        alt="props.banner"
      />
      <div className="flex my-0 mx-44 justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-2</span> out of 36 products
        </p>
        <div className="py-3 px-5 rounded-3xl bg-slate-400 flex items-center">
          <p className="mr-2"> Sort by</p>
          <span>
            <img src={dropdown_icon} alt="dropdown_icon" />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-36 mx-auto w-56 h-16 rounded-3xl bg-slate-300 text-[#787878] text-lg font-medium">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
