import {
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

import "./ProductDetails.css";

function ProductDetails({ product }) {
  const [qtyValue, setQtyValue] = useState(1);

  const changeQty = (event) => {
    setQtyValue(event.target.value);
  };

  return (
    <div className="product-details-page-wrapper">
      <div className="product-header">
        <Typography className="product-name-left" variant="h3">
          {product.name}
        </Typography>
        <Box className="image-wrapper">
          <Box component="img" src={product.image} className="product-image" />
        </Box>
      </div>
      <Box className="details-wrapper">
        <Typography className="product-name-right" variant="h3">
          {product.name}
        </Typography>
        <Box className="details">
          <Box className="price-and-sku">
            <Typography>${product.price}</Typography>
            <Typography>SKU:{product.sku}</Typography>
          </Box>
          <Box className="controls">
            <FormControl>
              <Select value={qtyValue} onChange={changeQty}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <Button size="large" variant="contained" color="primary">
              Add to cart
            </Button>
          </Box>
        </Box>
        <Paper className="description-text">
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default ProductDetails;
