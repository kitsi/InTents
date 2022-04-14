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
        <Typography><span style={styles.label}>Price: </span>{formatCurrency(product.price)}</Typography>
        <Typography><span style={styles.label}>Quantity: </span>{orderProduct.quantity}</Typography>
        <Typography><span style={styles.label}>Subtotal: </span>{formatCurrency(product.price * orderProduct.quantity)}</Typography>
      </Box>
    </Box>
  );
}
