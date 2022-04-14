import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import OrderProduct from "./OrderProduct";
import * as styles from "./SingleOrderStyles";

export default function SingleOrder({ order }) {

  const productList = order.orderProducts.map(orderProduct => {
    return <OrderProduct key={orderProduct.OrderProductId} orderProduct={orderProduct} />;
  });

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.userContainer}>
        <Typography><span style={styles.label}>Order # </span>{order.orderId}</Typography>
        <Typography><span style={styles.label}>User: </span>{order.user.username} ({order.user.firstName} {order.user.lastName})</Typography>
        TODO: Get Billing Info
      </Box>
      <Box sx={styles.productsContainer}>
        <Typography sx={{...styles.label, ...styles.centerText}}>Products</Typography>
        {productList}
      </Box>
    </Paper>
  );
}
