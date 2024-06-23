import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-full max-w-60 lg:max-w-sm mb-4 md:mb-8 ">
      <Link to={"/product/" + props.id}>
        {" "}
        <div className=" w-full m-0 my-2">
          <img
            className="block w-full h-auto object-cover"
            onClick={window.scrollTo(0, 0)}
            src={props.image}
            alt=""
          />
        </div>
      </Link>
      <p className="text-xl lg:text-3xl font-semibold">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-base lg:text-lg font-semibold">
          $ {props.new_price}
        </div>
        <div className="text-lg font-medium text-[#8c8c8c] line-through">
          $ {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
