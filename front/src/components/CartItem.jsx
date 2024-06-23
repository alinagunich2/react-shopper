import React from "react";
import remove_icon from "./assets/cart_cross_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartAmount, removeToCart } from "../redux/dataSlice";
const CartItem = () => {
  const { all_product, cartItem, totalSum } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();

  return (
    <div className=" my-24 mx-44">
      <div className="cartitems-main items-center gap-16 py-5 text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-slate-200 border-spacing-0" />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className=" cartitems-main items-center text-lg font-medium">
                <img className=" h-16" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className=" w-16 h-12 border-solid border-[#ebebeb] bg-white">
                  {cartItem[e.id]}
                </button>
                <p>$ {e.new_price * cartItem[e.id]}</p>
                <img
                  onClick={() => {
                    dispatch(removeToCart(e.id));
                    dispatch(getTotalCartAmount());
                  }}
                  className=" w-4 mx-10 cursor-pointer"
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="flex my-24">
        <div className="flex-1 flex flex-col mr-52 gap-10">
          <h1 className=" text-3xl">cart Total</h1>
          <div className="">
            <div className="flex justify-between py-4 border border-solid border-[#555]">
              <p>Subtatal</p>
              <p>${totalSum}</p>
            </div>
            <div className="flex justify-between py-4 border border-solid border-[#555]">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between py-4 border border-solid border-[#555]">
              <p>Total</p>
              <p>${totalSum}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 text-base font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox flex border-spacing-0 mt-4 pl-5 h-14 bg-[#eaeaea]">
            <input
              className="border-spacing-0 outline-none bg-transparent text-base w-80"
              type="text"
              placeholder="promo code"
            />
            <button className=" w-44 h-14 text-base bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
