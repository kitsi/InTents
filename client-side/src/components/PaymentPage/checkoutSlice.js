import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  formData: {
    addressFormData: {},
    paymentFormData: {},
  },
  loading: true,
  disablePayment: true,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.products = action.payload;
    // },
  },
});

export const {} = checkoutSlice.actions;

export default checkoutSlice.reducer;
