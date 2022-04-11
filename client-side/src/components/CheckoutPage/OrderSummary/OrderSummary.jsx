import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderTotal } from "../checkoutSlice";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";
import * as styles from "./OrderSummaryStyles";

function OrderSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const cartList = cartItems.map((item) => {
    return <SummaryProductTile key={item.product.id} product={item} />;
  });

  useEffect(() => {
    dispatch(setOrderTotal(total));
  }, [total, dispatch]);

  useEffect(() => {
    const calculateTotal = () => {
      let price = 0;

      cartItems.forEach((item) => {
        price += item.quantity * item.product.price;
      });

      setSubTotalPrice(price);
      setTax(0.08 * price);
      setTotal(price + 0.08 * price);
    };
    calculateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTotalPrice, setSubTotalPrice]);

  return (
    <Box sx={styles.summaryContainer}>
      <Paper elevation={3} sx={styles.contentContainer}>
        <Typography>Order Summary</Typography>
        <Divider />
        {cartList}
        <Divider />
        <Box sx={styles.totalsContainer}>
          <Typography>Subtotal: ${subTotalPrice.toFixed(2)}</Typography>
          <Typography>Shipping: FREE</Typography>
          <Typography>Tax(8%): ${tax.toFixed(2)}</Typography>

          <Divider />
          <Typography>Total: ${total.toFixed(2)}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default OrderSummary;
