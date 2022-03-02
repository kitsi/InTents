import "./ProductsPage.css";

import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

import ProductTile from "../common/ProductTile";
import productsjson from "../../products.json";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsjson);
    console.log(products);
  }, []);

  const productTiles = products.map((product) => {
    return <ProductTile key={product.id} productData={product} />;
  });

  return (
    <div id="products-page">
      <Typography variant="h2">Products</Typography>
      {products.length === 0 ? (
        <Typography variant="h3">
          No Products Available. Please check back again!
        </Typography>
      ) : (
        <>
          <Typography variant="h3">Available Products</Typography>
          <Stack>{productTiles}</Stack>
        </>
      )}
    </div>
  );
}

export default ProductsPage;
