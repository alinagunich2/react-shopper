import React, { useContext } from "react";
import star_icon from "./assets/star_icon.png";
import start_dull_icon from "./assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItem } = useContext(ShopContext);
  const add = () => {
    addToCart(product.id);
  };
  return (
    <div className="mb-20 my-0 mx-40">
      <div className="gap-4">
        <div className="mb-5 flex justify-center">
          <img src={product.image} alt="" />
        </div>
        <div className="flex gap-4 justify-center">
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
        </div>
      </div>
      <div>
        <div className="flex mx-0 my-16 flex-col">
          <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="flex  mx-0 my-10 gap-8 text-2xl font-bold">
            <div className="text-[#818181] line-through">
              ${product.old_price}
            </div>
            <div className="text-[#ff4141]">${product.new_price}</div>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          doloremque facilis magni aliquam optio beatae numquam id hic ex vero,
          eveniet ad deserunt maiores dolorem laudantium sit! Optio, quae?
        </div>
        <div>
          <h1 className="mt-14 text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="flex my-7 mx-0 p-0 gap-5">
            <div className="productDisplay-size">S</div>
            <div className="productDisplay-size">M</div>
            <div className="productDisplay-size">L</div>
            <div className="productDisplay-size">XL</div>
            <div className="productDisplay-size">XXL</div>
          </div>
        </div>
        <button
          onClick={() => add()}
          className="py-5 px-10 w-52 text-base font-semibold text-white bg-red-500 mb-10 border-spacing-0 outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="mt-2">
          <span className="font-semibold">Category :</span>Women, T-Shirt, Crop
          Top
        </p>
        <p>
          <span className="font-semibold">Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
