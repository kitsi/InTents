import { createSlice } from "@reduxjs/toolkit";

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
  orderTotal: 0,
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
    setPaymentForm: (state, action) => {
      const { payload } = action;
      state.formData.paymentFormData = payload;
    },
    setOrderTotal: (state, action) => {
      const { payload } = action;
      state.orderTotal = payload;
    },
  },
});

export const { setAddressForm, setPaymentForm, setOrderTotal } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
