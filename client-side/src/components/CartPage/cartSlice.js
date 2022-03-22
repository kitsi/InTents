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
      console.log(action.payload)

      
      // if(state.cartItems.length === 0) {
      //   state.cartItems.push(action.payload);
      // } else {
      //   state.cartItems.forEach(item => {
      //     if(item.sku === payload.product.sku) {
      //       item.quantity += 1
      //     }
      //   })
      // }

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
