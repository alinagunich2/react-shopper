import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataProducts,
  fetchDataUpdateCart,
  fetchDataUpdateProductReviews,
} from "./asyncActions";
import { fetchDataCart } from "./asyncActions";
import { ProductType } from "../type/product.type";

const initialState = {
  cartItem: [],
  all_product: [],
  totalItem: 0,
  totalSum: 0,
};

export const dataSlice: any = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAllProducts(state, action) {
      state.all_product = action.payload;
    },

    addToCart(state: any, action) {
      state.totalItem++;
      state.totalSum += action.payload.new_price * action.payload.count;

      let findCartItemSize: any = state.cartItem.find(
        (i: ProductType) =>
          i.size === action.payload.size && i.image === action.payload.image
      );
      if (findCartItemSize) {
        findCartItemSize.count++;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
      fetchDataUpdateCart(state.cartItem);
    },
    removeToCart(state: any, action) {
      state.cartItem = state.cartItem.filter((i: ProductType) => {
        return i._id !== action.payload._id || i.size !== action.payload.size;
      });
      state.totalItem -= action.payload.count;
      state.totalSum -= action.payload.new_price * action.payload.count;
      fetchDataUpdateCart(state.cartItem);
    },
    addReviews(state: any, action) {
      let findItemProduct = state.all_product.find(
        (i: ProductType) => i.id === action.payload[1]
      );
      if (findItemProduct) {
        findItemProduct.rewiews.push(action.payload[0]);
      }
      fetchDataUpdateProductReviews(state.all_product);
      console.log("sjxna");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProducts.fulfilled, (state, action) => {
      state.all_product = action.payload;
    });
    builder.addCase(fetchDataCart.fulfilled, (state, action) => {
      state.cartItem = action.payload;
      state.cartItem.forEach((i: ProductType) => {
        if (i.count) {
          state.totalItem = state.totalItem + i.count;
        }
      });

      state.cartItem.forEach((item: ProductType) => {
        if (item.count) {
          state.totalSum +=
            item.count > 1 ? item.new_price * item.count : item.new_price;
        }
      });
    });
  },
});

export const { setAllProducts, addToCart, removeToCart, addReviews } =
  dataSlice.actions;

export default dataSlice.reducer;
