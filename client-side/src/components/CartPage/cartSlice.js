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
        (product) => product.id === payload.id
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
        (item) => item.id !== payload.id
      );
    },
    incrementProduct: (state, action) => {
      const { payload } = action;
      const cartProduct = state.cartItems.filter(
        (product) => product.id === payload.id
      )[0];

      cartProduct.quantity++;
    },
    decrementProduct: (state, action) => {
      const { payload } = action;
      const cartProduct = state.cartItems.filter(
        (product) => product.id === payload.id
      )[0];

      cartProduct.quantity--;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
