import { Typography, Box } from "@mui/material";
import React from "react";

import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="product-header">
        <Typography variant="h3">{product.name}</Typography>
        <Box className="image-wrapper">
          <Box component="img" src={product.image} className="product-image" />
        </Box>
      </div>
      <Box>
        <Typography variant="body1">{product.description}</Typography>
      </Box>
    </div>
  );
}

export default ProductDetails;
