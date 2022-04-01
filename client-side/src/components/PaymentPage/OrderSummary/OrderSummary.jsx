import React from "react";

import { Box, Paper, Typography, Button, Divider } from "@mui/material";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";

function OrderSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <SummaryProductTile key={item.product.id} product={item} />;
  });

  return (
    <Box
      sx={{
        width: "60vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          margin: "1rem",
          padding: "1rem",
          width: "90%",
        }}
      >
        <Typography>Order Summary</Typography>
        <Divider />
        {cartList}
        <Divider />

        <Typography>Subtotal: </Typography>
        <Typography>Shipping: FREE</Typography>
        <Typography>Tax: </Typography>

        <Divider />
        <Typography>Total: </Typography>
      </Paper>
      <Button variant="contained">Place an Order</Button>
    </Box>
  );
}

export default OrderSummary;
