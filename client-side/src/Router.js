import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./components/ProductsPage/ProductsPage";

function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default Router;
