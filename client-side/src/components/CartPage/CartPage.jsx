import React, { useState, useEffect } from "react";
import * as styles from "./CartPageStyles.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency.js";
import CartProductTile from "./CartProductTile";
import { baseUrl } from "../../utilities/strings.js";
import Loading from "../common/Loading";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState();

  const updateCartList = () => {
    setCartList(cartItems.map((item) => {
      const product = products.filter(product => product.id === item.id)[0];
      return <CartProductTile key={item.id} cartProduct={item} product={product} />;
    }))
  };

  useEffect(() => {
    updateAllProducts();
  }, [cartItems]);

  useEffect(() => {
    updateCartList();
  }, [products]);

  const updateAllProducts = async () => {
    const productArray = [];

    for (let i = 0; i < cartItems.length; i++) {
      const { data } = await axios.get(`${baseUrl}/products/${cartItems[i].id}`);
      productArray.push(data);
    }

    setProducts(productArray);
  }

  function getSubtotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      const product = products.filter(item => item.id === cartItem.id)[0];

      if (product) {
        total += product.price * cartItem.quantity;
      }
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
