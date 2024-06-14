import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
  return (
    <div>
      <CartItem />
    </div>
  );
};

export default Cart;
