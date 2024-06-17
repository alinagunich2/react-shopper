import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-32 mx-44">
      <div className="flex">
        <div className="flex items-center justify-center text-base font-semibold w-44 h-16 border border-solid border-[#d0d0d0]">
          Description
        </div>
        <div className="flex items-center justify-center text-base font-semibold w-44 h-16 border border-solid border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-6 border border-solid border-[#d0d0d0] p-12 pb\">
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
