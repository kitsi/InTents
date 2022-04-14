import { Route, Routes } from "react-router-dom";

import CartPage from "./components/CartPage/CartPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import React from "react";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import LandingPage from "./components/LandingPage/LandingPage";
import AdminPage from "./components/AdminPage/AdminPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import CheckoutPageStripe from "./components/CheckoutPage/CheckoutPageStripe";
import AdminLogin from "./components/AdminPage/AdminLogin/AdminLogin";
import ProtectedRoute from "./utilities/ProtectedRoute";
import { useSelector } from "react-redux";
import OrderHistoryPage from "./components/OrderHistoryPage/OrderHistoryPage";

function Router() {
  const { token } = useSelector((state) => state.admin);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/categories/:category" element={<ProductsPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute admin={token}>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orderhistory"
        element={
          <ProtectedRoute admin={token}>
            <OrderHistoryPage />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/checkout" element={<CheckoutPageStripe />} />
      <Route path="/product/:id" exact element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
