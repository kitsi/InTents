import "./cartPage.css";

import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import CartProductTile from "./CartProductTile";
import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <CartProductTile key={item.product.id} product={item} />;
  });

  return (
    <div className="cart-page">
      <div className="button-container">
        <div className="buttons">
          <Link to={"/products"}>
            <Button
              className="continue-shopping-mobile"
              size="large"
              variant="contained"
              color="primary"
            >
              <ArrowBackIosNewIcon />
            </Button>
          </Link>
          <Typography variant="h2">Cart</Typography>
          <Link to={"/checkout"}>
            <Button size="large" variant="contained" color="primary">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
      <div className="cart-content-container">
        <div className="cart-controls"></div>
        <div className="cart-product-tiles-container">{cartList}</div>
      </div>
    </div>
  );
}
