import React, { useState, useEffect } from "react";

import { Box, Paper, Typography, Button, Divider } from "@mui/material";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";

function OrderSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <SummaryProductTile key={item.product.id} product={item} />;
  });
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      console.log(item);
      price += item.quantity * item.product.price;
    });
    setSubTotalPrice(price);
  }, [cartItems, subTotalPrice, setSubTotalPrice]);

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

        <Typography>Subtotal: ${subTotalPrice.toFixed(2)}</Typography>
        <Typography>Shipping: FREE</Typography>
        <Typography>Tax: ${(0.08 * subTotalPrice).toFixed(2)}</Typography>

        <Divider />
        <Typography>
          Total: ${(subTotalPrice + 0.08 * subTotalPrice).toFixed(2)}
        </Typography>
      </Paper>
      <Button variant="contained">Place an Order</Button>
    </Box>
  );
}

export default OrderSummary;
