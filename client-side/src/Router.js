import { Route, Routes } from "react-router-dom";

import CartPage from "./components/CartPage/CartPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import React from "react";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import LandingPage from "./components/LandingPage/LandingPage";
import AdminPage from "./components/AdminPage/AdminPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/categories/:category" element={<ProductsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/:sku" exact element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
