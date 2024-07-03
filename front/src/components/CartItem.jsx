import React from "react";
import remove_icon from "./assets/cart_cross_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartAmount, removeToCart } from "../redux/dataSlice";
const CartItem = () => {
  const { cartItem, totalSum } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      {cartItem.length !== 0 ? (
        <div className=" mx-3 md:my-20 md:mx-20 lg:my-24 lg:mx-44">
          <div className="overflow-x-auto whitespace-nowrap ">
            <div className="cartitems-main items-center  py-5 text-[#454545] text-lg font-semibold">
              <p className="mr-2">Products</p>
              <p className="mr-2">Title</p>
              <p className="mr-2">Size</p>
              <p className="mr-2">Price</p>
              <p className="mr-2">Quantity</p>
              <p className="mr-2">Total</p>
              <p className="mr-2">Remove</p>
            </div>
            <hr className="h-1 bg-slate-200 border-spacing-0" />
            {cartItem.map((e, i) => {
              return (
                <div key={i}>
                  <div className=" cartitems-main items-center text-lg font-medium">
                    <img className="block mr-2 h-16" src={e.image} alt="" />
                    <p className="mr-2">{e.name}</p>
                    <p className="mr-2">{e.size}</p>
                    <p className="mr-2">$ {e.new_price}</p>

                    <div className="flex mr-2">
                      <span className=" cursor-pointer">+</span>
                      <p className="mx-2">{e.count}</p>
                      <span className=" cursor-pointer">-</span>
                    </div>

                    <p className="mr-2">$ {e.new_price * e.count}</p>
                    <img
                      onClick={() => {
                        dispatch(removeToCart(e.id));
                        dispatch(getTotalCartAmount());
                      }}
                      className="mr-2 w-4 mx-10 cursor-pointer"
                      src={remove_icon}
                      alt=""
                    />
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>

          <div className="flex my-24">
            <div className="flex-1 flex flex-col mr-52 gap-10">
              <h1 className=" text-3xl">Total ${totalSum}</h1>
            </div>
          </div>
        </div>
      ) : (
        <p className=" mt-28 flex justify-center text-xl sm:text-2xl md:text-3xl">
          В корзине пусто &#128554;
        </p>
      )}
    </>
  );
};

export default CartItem;
