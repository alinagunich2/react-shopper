import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import "./CartItem.css";
const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItem, removeToCart } =
    useContext(ShopContext);
  console.log(cartItem);
  return (
    <div className="cartitems my-24 mx-44">
      <div className="cartitems-main">
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
            <div className="cartit">
              <div className="cartitems-format cartitems-main">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="cartitems-quantity">{cartItem[e.id]}</button>
                <p>$ {e.new_price * cartItem[e.id]}</p>
                <img
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Total</h1>
          <div className="">
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCartAmount()}</p>
              <hr />
            </div>
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
              <hr />
            </div>

            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
              <hr />
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
