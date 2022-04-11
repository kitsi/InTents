import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";
import * as styles from "./OrderSummaryStyles";
import formatCurrency from "../../../utilities/formatCurrency";

function OrderSummary(props) {
  const { cartItems } = useSelector((state) => state.cart);
  const { subTotalPrice, setSubTotalPrice, tax, setTax, total, setTotal } =
    props;

  const cartList = cartItems.map((item) => {
    return <SummaryProductTile key={item.product.id} product={item} />;
  });

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
  }, []);

  return (
    <Box sx={styles.summaryContainer}>
      <Paper elevation={3} sx={styles.contentContainer}>
        <Typography>Order Summary</Typography>
        <Divider />
        {cartList}
        <Divider />
        <Box sx={styles.totalsContainer}>
          <Typography>Subtotal: {formatCurrency(subTotalPrice)}</Typography>
          <Typography>Shipping: FREE</Typography>
          <Typography>Tax(8%): {formatCurrency(tax)}</Typography>

          <Divider />
          <Typography>Total: {formatCurrency(total)}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default OrderSummary;
