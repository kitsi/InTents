import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    addressFormData: {
      firstName: "",
      lastName: "",
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      state: "",
      zip: "",
    },
    paymentFormData: {
      nameOnCard: "",
      cardNumber: "",
      expiration: "",
      cvc: "",
    },
  },
  loading: true,
  disablePayment: true,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setAddressForm: (state, action) => {
      const { payload } = action;
      state.formData.addressFormData = payload;
    },
  },
});

export const { setAddressForm } = checkoutSlice.actions;

export default checkoutSlice.reducer;
