import "./cartPage.css";

import { Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CartProductTile from "./CartProductTile";
import React from "react";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map((item) => {
    return <CartProductTile key={item.id} product={item} />;
  });

  return (
    <div className="cart-page">
      <Typography variant="h2">Cart</Typography>
      <Divider />
      <div className="cart-controls"></div>
      <div className="cart-product-tiles-container">{cartList}</div>
    </div>
  );
}
