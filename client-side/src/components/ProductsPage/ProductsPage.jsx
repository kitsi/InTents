import "./ProductsPage.css";

import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductTile from "../common/ProductTile";
import productsjson from "../../products.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

function ProductsPage() {
  // const [products, setProducts] = useState([]);
  const { products } = useSelector((state) => state.products);

  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(productsjson));
  }, []);

  const productTiles = products.map((product) => {
    return <ProductTile key={product.id} productData={product} />;
  });

  return (
    <div id="products-page">
      <Typography variant="h2">
        {category ? category : "All Products"}
      </Typography>
      <Divider />

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
