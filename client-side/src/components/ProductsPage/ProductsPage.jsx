import "./ProductsPage.css";

import React, { useState } from "react";

import { Typography } from "@mui/material";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  return (
    <div id="products-page">
      <Typography variant="h2">Products</Typography>
      {products.length === 0 && (
        <Typography variant="h3">
          No Products Available. Please check back again!
        </Typography>
      )}
    </div>
  );
}

export default ProductsPage;
