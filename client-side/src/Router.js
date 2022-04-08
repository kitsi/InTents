import { Route, Routes } from "react-router-dom";

import CartPage from "./components/CartPage/CartPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import React from "react";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import AdminPage from "./components/AdminPage/AdminPage";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/categories/:category" element={<ProductsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/:sku" exact element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default Router;
