import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataProducts,
  fetchDataUpdateCart,
  fetchDataUpdateProductReviews,
} from "./asyncActions";
import { fetchDataCart } from "./asyncActions";

const initialState = {
  cartItem: [],
  all_product: [],
  totalItem: 0,
  totalSum: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAllProducts(state, action) {
      state.all_product = action.payload;
    },

    addToCart(state, action) {
      state.totalItem++;
      state.totalSum += action.payload.new_price * action.payload.count;

      let findCartItemSize = state.cartItem.find(
        (i) =>
          i.size === action.payload.size && i.image === action.payload.image
      );
      if (findCartItemSize) {
        findCartItemSize.count++;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
      fetchDataUpdateCart(state.cartItem);
    },
    removeToCart(state, action) {
      state.cartItem = state.cartItem.filter((i) => {
        return i._id !== action.payload._id || i.size !== action.payload.size;
      });
      state.totalItem -= action.payload.count;
      state.totalSum -= action.payload.new_price * action.payload.count;
      fetchDataUpdateCart(state.cartItem);
    },
    addReviews(state, action) {
      let findItemProduct = state.all_product.find(
        (i) => i.id === action.payload[1]
      );
      if (findItemProduct) {
        findItemProduct.rewiews.push(action.payload[0]);
      }
      fetchDataUpdateProductReviews(state.all_product);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProducts.fulfilled, (state, action) => {
      state.all_product = action.payload;
    });
    builder.addCase(fetchDataCart.fulfilled, (state, action) => {
      state.cartItem = action.payload;
      state.cartItem.forEach((i) => {
        state.totalItem = state.totalItem + i.count;
      });

      state.cartItem.forEach((item) => {
        state.totalSum +=
          item.count > 1 ? item.new_price * item.count : item.new_price;
      });
    });
  },
});

export const {
  setAllProducts,
  addToCart,
  removeToCart,
  summTotalItem,
  addReviews,
} = dataSlice.actions;

export default dataSlice.reducer;
