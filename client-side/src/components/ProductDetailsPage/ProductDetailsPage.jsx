import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import Loading from "../common/Loading";
import ProductDetails from "./ProductDetails";
import * as styles from "./ProductDetailsPageStyles";
import { baseUrl } from "../../utilities/strings";

function ProductDetailsPage() {
  const { sku } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const { data } = await axios
        .get(`${baseUrl}/products?sku=${sku}`)
      setLoading(false);
      setProduct(data[0]);
    }

    getProduct();
  }, [sku]);

  return (
    <Box sx={styles.productDetailsPage}>
      <Box sx={styles.productDetailsWrapper}>
        {loading ? <Loading /> : <ProductDetails product={product} />}
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
