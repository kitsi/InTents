import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import Loading from "../common/Loading";
import ProductDetails from "./ProductDetails";
import * as styles from "./ProductDetailsPageStyles";
import { baseUrl } from "../../utilities/strings";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function getProduct() {
      await axios.get(`${baseUrl}/products/${id}`)
        .then(res => {
          if (res.status === 200) {
            if (res.data) {
              setErrorMsg();
              setProduct(res.data);
            } else {
              setErrorMsg(`Error: Product with ID ${id} does not exist.`);
            }
          } else {
            setErrorMsg(`ERROR ${res.status}: ${res?.error} - ${res?.message}`);
          }
        });
    }

    getProduct();
  }, [id]);

  return (
    <Box sx={styles.productDetailsPage}>
      <Box sx={styles.productDetailsWrapper}>
        {product ? <ProductDetails product={product} /> : errorMsg ? (
          <Box sx={styles.errorContainer}>
            <Typography sx={styles.error}>{errorMsg}</Typography>
            <Button component={Link} to="/products" variant="contained">Return to Products</Button>
          </Box>
        ) : <Loading />}
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
