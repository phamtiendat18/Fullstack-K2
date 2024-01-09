import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../API/client";
const initialState = {
  products: [],
  productDetail: [],
  cart: JSON.parse(localStorage.getItem("value")) || [],
  status: "pending",
};
export const productsSlice = createSlice({
  name: "productList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "success";
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(getProductDetail.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.productDetail = action.payload;
      state.status = "success";
    });
    builder.addCase(getProductDetail.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      const check = state.cart.findIndex((item) => {
        return item._id === action.payload._id;
      });
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("value", JSON.stringify(state.cart));

      state.status = "success";
    });
    builder.addCase(postProduct.rejected, (state) => {
      state.status = "error";
    });
  },
});
export const getProducts = createAsyncThunk("getProducts", async (query) => {
  const queryString = new URLSearchParams(query);
  const { response, data } = await client.get(`/products?${queryString}`);
  if (response.status === 200) {
    return data.data.listProduct;
  }
});
export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (param) => {
    const { response, data } = await client.get(`/products/${param}`);
    if (response.status === 200) {
      return data.data;
    }
  }
);
export const postProduct = createAsyncThunk("postProduct", async (param) => {
  const { response, data } = await client.get(`/products/${param}`);
  if (response.status === 200) {
    return data.data;
  }
});
