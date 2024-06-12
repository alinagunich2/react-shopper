import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import start_dull_icon from "../assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItem } = useContext(ShopContext);
  const add = () => {
    addToCart(product.id);
  };
  return (
    <div className="proddis  mb-20 my-0 mx-40">
      <div className="proddis-left flex gap-4">
        <div className="proddis-img-list flex flex-col gap-4">
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
        </div>
        <div className="proddis-img">
          <img className="proddis-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="">
        <div className="proddis-right flex mx-0 my-16 flex-col">
          <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
          <div className="proddis-right-star flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="proddis-right-prices flex  mx-0 my-10 gap-8 text-2xl font-bold">
            <div className="proddis-right-price-old text-[#818181] line-through">
              ${product.old_price}
            </div>
            <div className="proddis-right-price-new  text-[#ff4141]">
              ${product.new_price}
            </div>
          </div>
        </div>
        <div className="proddis-right-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          doloremque facilis magni aliquam optio beatae numquam id hic ex vero,
          eveniet ad deserunt maiores dolorem laudantium sit! Optio, quae?
        </div>
        <div className="proddis-right-size">
          <h1 className="mt-14 text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="proddis-right-size flex my-7 mx-0 p-0 gap-5">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>
        </div>
        <button
          onClick={() => add()}
          className="py-5 px-10 w-52 text-base font-semibold text-white bg-red-500 mb-10 border-spacing-0 outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="proddis-right-categ mt-2">
          <span className="font-semibold">Category :</span>Women, T-Shirt, Crop
          Top
        </p>
        <p className="proddis-right-categ">
          <span className="font-semibold">Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
