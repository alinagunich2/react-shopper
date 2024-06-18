import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-96">
      <Link to={"/product/" + props.id}>
        {" "}
        <img
          className="m-0 mt-2 mb-2"
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-lg font-semibold">
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