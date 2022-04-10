import { Divider, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductTile from "../common/ProductTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Loading from "../common/Loading";
import * as styles from "./ProductsPageStyles";

function ProductsPage() {
  const { products, loading } = useSelector((state) => state.products);

  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(fetchProducts());
  }, [dispatch, products]);

  const productTiles = products
    .filter((product) => (category ? product.category == category : true))
    .map((product) => {
      return <ProductTile key={product.id} productData={product} />;
    });

  const headingFormatter = (heading) => {
    let title = "";
    const headingArray = heading.split("-");
    headingArray.forEach(
      (word) =>
        (title += word.substring(0, 1).toUpperCase() + word.substring(1) + " ")
    );

    return title;
  };

  return (
    <div id="products-page">
      <Typography
        variant="h2"
        sx={{ ...styles.productsPageHeader, ...styles.alignCenter }}
      >
        {category ? headingFormatter(category) : "All Products"}
      </Typography>
      <Divider />

      <Box sx={styles.productTilesContainer}>
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Typography variant="h3" sx={styles.alignCenter}>
            No Products Available. Please check back again!
          </Typography>
        ) : (
          <>{productTiles}</>
        )}
      </Box>
    </div>
  );
}

export default ProductsPage;
