import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../type/product.type";

export const fetchDataProducts = createAsyncThunk(
  "product/fetchProductStatus",

  async () => {
    try {
      const response = await fetch("http://localhost:4001/allproducts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
);
export const fetchDataCart = createAsyncThunk(
  "cart/fetchCartStatus",

  async () => {
    try {
      const response = await fetch("http://localhost:4001/cart");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
);

export async function fetchDataUpdateCart(dataCart: ProductType) {
  try {
    const response = await fetch("http://localhost:4001/updatecart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCart),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
export async function fetchDataUpdateProductReviews(dataProducts: ProductType) {
  try {
    const response = await fetch("http://localhost:4001/updateproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataProducts),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
