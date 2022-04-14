import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Loading from "../common/Loading";
import ProductDetails from "./ProductDetails";
import * as styles from "./ProductDetailsPageStyles";
import { Link } from "react-router-dom";
import getProductById from "../../api/getProductById";

function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function getProduct() {
      const { product, errorMessage } = await getProductById(id);
      setErrorMsg(errorMessage);
      setProduct(product);
    }

    getProduct();
  }, [id]);

  return (
    <Box sx={styles.productDetailsPage}>
      <Box sx={styles.productDetailsWrapper}>
        {product ? (
          <ProductDetails product={product} />
        ) : errorMsg ? (
          <Box sx={styles.errorContainer}>
            <Typography sx={styles.error}>{errorMsg}</Typography>
            <Button component={Link} to="/products" variant="contained">
              Return to Products
            </Button>
          </Box>
        ) : (
          <Loading />
        )}
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
