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
      const cartProduct = state.cartItems.filter(product => product.product.sku === payload.product.sku)[0];

      if (!cartProduct) {
        state.cartItems.push(action.payload);
      } else {
        cartProduct.quantity += payload.quantity;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
