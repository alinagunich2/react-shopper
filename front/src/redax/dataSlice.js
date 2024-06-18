import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./asyncActions";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const initialState = {
  cartItem: getDefaultCart(),
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
      state.cartItem = {
        ...state.cartItem,
        [action.payload]: state.cartItem[action.payload] + 1,
      };
      state.totalItem++;
    },
    removeToCart(state, action) {
      state.cartItem = {
        ...state.cartItem,
        [action.payload]: state.cartItem[action.payload] - 1,
      };
      state.totalItem--;
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
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.all_product = action.payload;
    });
  },
});

export const { setAllProducts, addToCart, removeToCart, getTotalCartAmount } =
  dataSlice.actions;

export default dataSlice.reducer;
