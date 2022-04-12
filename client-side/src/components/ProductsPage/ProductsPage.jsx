import { Divider, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductTile from "./ProductTile";
import Loading from "../common/Loading";
import * as styles from "./ProductsPageStyles";

function ProductsPage() {
  const navigate = useNavigate();

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSuccess, setLoadingSuccess] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect();

  useEffect(() => {
    const categories = [
      "tents",
      "cookware",
      "sleeping-bags",
      "fans",
      "emergency",
    ];

    if (!categories.includes(category)) {
      return navigate("/products");
    }
  }, [products, category, navigate]);

  const productTiles = products
    .filter((product) => (category ? product.category === category : true))
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
        {isLoading ? (
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
