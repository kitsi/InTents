import "./cartPage.css";

import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import CartProductTile from "./CartProductTile";
import React from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <CartProductTile key={item.product.id} product={item} />;
  });

  return (
    <div className="cart-page">
      <Typography variant="h2">Cart</Typography>
      <Divider />
      <div className="cart-content-container">
        <div className="button-container">
          <Link to={"/products"}>
            <Button size="large" variant="contained" color="primary">
              Continue Shopping
            </Button>
          </Link>
          <Link to={"/checkout"}>
            <Button size="large" variant="contained" color="primary">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
        <div className="cart-controls"></div>
        <div className="cart-product-tiles-container">{cartList}</div>
      </div>
    </div>
  );
}
