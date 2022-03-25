import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      const cartProduct = state.cartItems.filter(
        (product) => product.product.sku === payload.product.sku
      )[0];

      if (!cartProduct) {
        state.cartItems.push(action.payload);
      } else {
        cartProduct.quantity += payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      state.cartItems = state.cartItems.filter(
        (item) => item.product.sku !== payload.product.sku
      );
    },
    incrementProduct: (state, action) => {
      const { payload } = action;
      const cartProduct = state.cartItems.filter(
        (product) => product.product.sku === payload.product.sku
      )[0];

      cartProduct.quantity++;
    },
    decrementProduct: (state, action) => {
      const { payload } = action;
      const cartProduct = state.cartItems.filter(
        (product) => product.product.sku === payload.product.sku
      )[0];

      cartProduct.quantity--;
    },
  },
});

export const { addProduct, incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
