import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import Loading from "../common/Loading";
import ProductDetails from "./ProductDetails";
import * as styles from "./ProductDetailsPageStyles";
import { baseUrl } from "../../utilities/strings";

function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      await axios.get(`${baseUrl}/products/${id}`)
        .then(res => setProduct(res.data));
    }

    getProduct();
  }, [id]);

  return (
    <Box sx={styles.productDetailsPage}>
      <Box sx={styles.productDetailsWrapper}>
        {product ? <ProductDetails product={product} /> : <Loading />}
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
