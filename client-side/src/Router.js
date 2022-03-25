import { Route, Routes } from "react-router-dom";

import CartPage from "./components/CartPage/CartPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/categories/:category" element={<ProductsPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default Router;
