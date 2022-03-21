import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/ProductsPage/productsSlice";
import cartReducer from "../components/CartPage/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
