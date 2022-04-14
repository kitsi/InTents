import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import OrderProduct from "./OrderProduct";
import * as styles from "./SingleOrderStyles";
import formatCurrency from "../../utilities/formatCurrency";

export default function SingleOrder({ order }) {
  const productList = order.orderProducts.map((orderProduct) => {
    return (
      <OrderProduct
        key={orderProduct.orderProductId}
        orderProduct={orderProduct}
      />
    );
  });

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.userContainer}>
        <Typography>
          <span style={styles.label}>Order # </span>
          {order.orderId}
        </Typography>
        <Typography>
          <span style={styles.label}>User: </span>
          {order.user.username} ({order.user.firstName} {order.user.lastName})
        </Typography>
        <Typography>
          <span style={styles.label}>Paid: </span>
          {order?.billing?.paid ? "Yes" : "No"}
        </Typography>
        <Typography>
          <span style={styles.label}>Subtotal: </span>
          {formatCurrency(order?.billing?.subtotal)}
        </Typography>
        <Typography>
          <span style={styles.label}>Tax: </span>
          {formatCurrency(order?.billing?.tax)}
        </Typography>
        <Typography>
          <span style={styles.label}>Total: </span>
          {formatCurrency(order?.billing?.subtotal + order?.billing?.tax)}
        </Typography>
      </Box>
      <Box sx={styles.productsContainer}>
        <Typography sx={{ ...styles.label, ...styles.centerText }}>
          Products
        </Typography>
        {productList}
      </Box>
    </Paper>
  );
}
