import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox my-32 mx-44">
      <div className="descriptionbox-navigator flex">
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold w-44 h-16 ">
          Description
        </div>
        <div className="descriptionbox-nav-box far flex items-center justify-center text-base font-semibold w-44 h-16 ">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-descript flex flex-col gap-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          ut ex animi eveniet cum, quisquam voluptatibus? Autem nisi
          perspiciatis deserunt alias. Ex, iste quisquam dolorem quidem pariatur
          eaque consequuntur!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
