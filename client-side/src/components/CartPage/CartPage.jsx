import React from "react";
import * as styles from "./CartPageStyles.js";

import { useSelector } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency.js";
import CartProductTile from "./CartProductTile";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <CartProductTile key={item.id} product={item} />;
  });

  function getSubtotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].product.price * cartItems[i].quantity;
    }
    return total;
  }

  return (
    <Box>
      <Box sx={styles.buttonContainer}>
        <Box sx={styles.buttons}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            component={Link}
            to={"/products"}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Typography variant="h2">Cart</Typography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            component={Link}
            to={"/checkout"}
          >
            Checkout
          </Button>
        </Box>
        <Typography sx={styles.subtotal}>
          <strong>Subtotal:</strong> {formatCurrency(getSubtotal())}
        </Typography>
      </Box>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.productTilesContainer}>
          {cartItems.length > 0 ? (
            cartList
          ) : (
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              No items in your cart
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
