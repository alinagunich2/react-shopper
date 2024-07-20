import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../type/product.type";

const Item = (props: ProductType) => {
  return (
    <div className="hover:shadow-md border border-solid border-gray-300 transition-all duration-300 ease-in-out rounded-md overflow-hidden w-full max-w-60 lg:max-w-sm mb-4 md:mb-8 ">
      <Link to={"/product/" + props.id}>
        {" "}
        <div className=" w-full m-0 my-2">
          <img
            className="-mt-2 block w-full h-auto object-cover"
            onClick={() => window.scrollTo(0, 0)}
            src={props.image}
            alt=""
          />
        </div>
      </Link>
      <div className="px-4">
        <p className="text-xl lg:text-3xl font-semibold">{props.name}</p>
        <div className="flex gap-5">
          <div className="text-[#374151] text-base lg:text-lg font-semibold">
            $ {props.new_price}
          </div>
          <div className="pb-3  text-lg font-medium text-[#8c8c8c] line-through">
            $ {props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
