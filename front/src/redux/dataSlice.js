import { createSlice } from "@reduxjs/toolkit";
import { fetchDataProducts, fetchDataUpdateCart } from "./asyncActions";
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

      let findCartItemSize = state.cartItem.find(
        (i) =>
          i.size === action.payload.size && i.image === action.payload.image
      );
      console.log(findCartItemSize);
      if (findCartItemSize) {
        findCartItemSize.count++;
        console.log("yes");
      } else {
        state.cartItem = [...state.cartItem, action.payload];
        console.log("no");
      }
      fetchDataUpdateCart(state.cartItem);
    },
    removeToCart(state, action) {
      // state.cartItem = {
      //   ...state.cartItem,
      //   [action.payload]: state.cartItem[action.payload] - 1,
      // };
      // state.totalItem--;
      console.log("remove");
    },
    getTotalCartAmount(state) {
      state.totalSum = 0;
      for (const item in state.cartItem) {
        if (state.cartItem[item] > 0) {
          let itemInfo = state.all_product.find(
            (product) => product.id === Number(item)
          );
          state.totalSum += itemInfo.new_price * state.cartItem[item];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProducts.fulfilled, (state, action) => {
      console.log("fetchDataProducts");
      state.all_product = action.payload;
    });
    builder.addCase(fetchDataCart.fulfilled, (state, action) => {
      console.log("fetchDataCart");
      state.cartItem = action.payload;
      state.cartItem.forEach((i) => {
        console.log(i.count);
        state.totalItem = state.totalItem + i.count;
      });
    });
  },
});

export const {
  setAllProducts,
  addToCart,
  removeToCart,
  getTotalCartAmount,
  summTotalItem,
} = dataSlice.actions;

export default dataSlice.reducer;
