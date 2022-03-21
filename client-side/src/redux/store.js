import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/ProductsPage/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
