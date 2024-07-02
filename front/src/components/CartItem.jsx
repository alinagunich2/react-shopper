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
    <>
      {totalSum !== 0 ? (
        <div className=" mx-3 md:my-20 md:mx-20 lg:my-24 lg:mx-44">
          <div className="overflow-x-auto whitespace-nowrap ">
            <div className="cartitems-main items-center  py-5 text-[#454545] text-lg font-semibold">
              <p className="mr-4">Products</p>
              <p className="mr-4">Title</p>
              <p className="mr-4">Price</p>
              <p className="mr-4">Quantity</p>
              <p className="mr-4">Total</p>
              <p className="mr-4">Remove</p>
            </div>
            <hr className="h-1 bg-slate-200 border-spacing-0" />
            {all_product.map((e) => {
              if (cartItem[e.id] > 0) {
                return (
                  <div key={e.id}>
                    <div className=" cartitems-main items-center text-lg font-medium">
                      <img className="block mr-4 h-16" src={e.image} alt="" />
                      <p className="mr-4">{e.name}</p>
                      <p className="mr-4">$ {e.new_price}</p>
                      <button className="mr-4 w-16 h-12 border-solid border-[#ebebeb] bg-white">
                        {cartItem[e.id]}
                      </button>
                      <p className="mr-4">$ {e.new_price * cartItem[e.id]}</p>
                      <img
                        onClick={() => {
                          dispatch(removeToCart(e.id));
                          dispatch(getTotalCartAmount());
                        }}
                        className="mr-4 w-4 mx-10 cursor-pointer"
                        src={remove_icon}
                        alt=""
                      />
                    </div>
                    <hr />
                  </div>
                );
              }
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
