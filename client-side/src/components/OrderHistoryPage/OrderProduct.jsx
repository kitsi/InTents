import React from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./OrderProductStyles";
import formatCurrency from "../../utilities/formatCurrency";

export default function OrderProduct({ orderProduct }) {
  const { product } = orderProduct;

  return (
    <Box sx={styles.container}>
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={styles.image}
      />
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.title}>{product.title}</Typography>
        <Typography>Price: {formatCurrency(product.price)}</Typography>
        <Typography>Quantity: {orderProduct.quantity}</Typography>
        <Typography>Subtotal: {formatCurrency(product.price * orderProduct.quantity)}</Typography>
      </Box>
    </Box>
  );
}
