import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import * as styles from "./SingleOrderStyles";

export default function SingleOrder({ order }) {
  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.userContainer}>
        <Typography>Order #{order.orderId}</Typography>
        <Typography>User: {order.user.username} ({order.user.firstName} {order.user.lastName})</Typography>
      </Box>
      <Box sx={styles.productsContainer}>
        Products here
      </Box>
    </Paper>
  );
}
