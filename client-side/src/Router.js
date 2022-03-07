import { Route, Routes } from "react-router-dom";

import CartPage from "./components/CartPage/CartPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      {/* <Route path="/products:q=category" element={<ProductsPage />} /> */}
    </Routes>
  );
}

export default Router;
