import "./ProductsPage.css";

import React, { useState } from "react";

import { Typography } from "@mui/material";

function ProductsPage() {
  const [products, setProducts] = useState([1]);

  return (
    <div id="products-page">
      <Typography variant="h2">Products</Typography>
      {products.length === 0 ? (
        <Typography variant="h3">
          No Products Available. Please check back again!
        </Typography>
      ) : (
        <Typography variant="h3">Available Products</Typography>
      )}
    </div>
  );
} 

export default ProductsPage;
