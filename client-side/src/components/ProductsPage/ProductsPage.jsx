import "./ProductsPage.css";

import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductTile from "../common/ProductTile";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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
      <Divider />
      <Link to="/cart"> <ShoppingCartOutlinedIcon /></Link>
      {products.length === 0 ? (
        <Typography variant="h3">
          No Products Available. Please check back again!
        </Typography>
      ) : (
        <div className="product-tiles-container">{productTiles}</div>
      )}
    </div>
  );
}

export default ProductsPage;
