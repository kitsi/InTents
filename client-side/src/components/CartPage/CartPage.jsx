import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductTile from "./CartProductTile";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const cartList = cartItems.map(item => {
    return (
      <CartProductTile product={item} />
    );
  });

  return (
    cartList
  );
}
