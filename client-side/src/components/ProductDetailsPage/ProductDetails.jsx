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
import { useDispatch } from "react-redux";
import { addProduct } from "../CartPage/cartSlice";
import * as styles from "./ProductDetailsPageStyles";

function ProductDetails({ product }) {
  const [qtyValue, setQtyValue] = useState(1);
  const dispatch = useDispatch();

  const changeQty = (event) => {
    setQtyValue(event.target.value);
  };

  function addToCart() {
    dispatch(
      addProduct({
        quantity: qtyValue,
        product: product,
      })
    );
  }

  const headingFormatter = (heading) => {
    return heading.substring(0, 1).toUpperCase() + heading.substring(1);
  };

  return (
    <Box sx={styles.productDetailsPageWrapper}>
      <Box sx={styles.productHeader}>
        <Box sx={styles.imageWrapper}>
          <Box
            component="img"
            src={product.image}
            sx={styles.productDetailsImage}
          />
        </Box>
      </Box>
      <Box sx={styles.detailsWrapper}>
        <div>
          <Typography sx={styles.productNameRight} variant="h3">
            {product.name}
          </Typography>
          <Typography sx={styles.category}>
            {product.category && headingFormatter(product.category)}
          </Typography>
        </div>
        <Box sx={styles.details}>
          <Box sx={styles.priceAndSku}>
            <Typography>${product.price}</Typography>
            <Typography>SKU:{product.sku}</Typography>
          </Box>
          <Box sx={styles.controls}>
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
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={addToCart}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
        <Paper sx={styles.descriptionText}>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default ProductDetails;
