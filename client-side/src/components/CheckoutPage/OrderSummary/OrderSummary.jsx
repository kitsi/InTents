import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";

function OrderSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <SummaryProductTile key={item.product.id} product={item} />;
  });
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.quantity * item.product.price;
    });
    setSubTotalPrice(price);
    setTax(0.08 * subTotalPrice);
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
        <Typography>Tax: ${tax.toFixed(2)}</Typography>

        <Divider />
        <Typography>Total: ${(subTotalPrice + tax).toFixed(2)}</Typography>
      </Paper>
    </Box>
  );
}

export default OrderSummary;
