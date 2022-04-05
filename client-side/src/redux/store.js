import cartReducer from "../components/CartPage/cartSlice";
import checkoutReducer from "../components/PaymentPage/checkoutSlice";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/ProductsPage/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
