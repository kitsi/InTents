import React, { useState, useEffect } from "react";
import * as styles from "./CartPageStyles.js";
import { useSelector } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency.js";
import CartProductTile from "./CartProductTile";
import { useDispatch } from "react-redux";
import { removeProduct } from "./cartSlice.js";
import getProductDataFromCart from "../../api/getProductDataFromCart.js";

export default function CartPage() {
  const dispatch = useDispatch();
  
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState();

  useEffect(() => {
    const updateAllProducts = async () => {
      const { products, removedCartItems } = await getProductDataFromCart(cartItems);
      
      for (let i = 0; i < removedCartItems.length; i++) {
        dispatch(removeProduct(removedCartItems[i]));
      }
  
      setProducts(products);
    }

    updateAllProducts();
  }, [cartItems, dispatch]);

  useEffect(() => {
    setCartList(cartItems.map((item) => {
      const product = products.filter(product => product.productId === item.id)[0];
      return <CartProductTile key={item.id} cartProduct={item} product={product} />;
    }))
  }, [products, cartItems]);

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
