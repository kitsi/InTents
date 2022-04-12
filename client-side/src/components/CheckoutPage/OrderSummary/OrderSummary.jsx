import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";
import * as styles from "./OrderSummaryStyles";
import formatCurrency from "../../../utilities/formatCurrency";
import Loading from "../../common/Loading";
import { useDispatch } from "react-redux";
import { setOrderTotal } from "../checkoutSlice";
import { removeProduct } from "../../CartPage/cartSlice";
import getProductDataFromCart from "../../../api/getProductDataFromCart";

function OrderSummary(props) {
  const { cartItems } = useSelector((state) => state.cart);
  const { subTotalPrice, setSubTotalPrice, tax, setTax, total, setTotal } = props;
  
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setOrderTotal(total));
  }, [total, dispatch]);

  useEffect(() => {
    const updateAllProducts = async () => {
      const { products, removedCartItems } = await getProductDataFromCart(cartItems);
      
      for (let i = 0; i < removedCartItems.length; i++) {
        dispatch(removeProduct(removedCartItems[i]));
      }
  
      setProducts(products);
      setLoading(false);
    }

    updateAllProducts();
  }, [cartItems, dispatch]);

  useEffect(() => {
    setCartList(cartItems.map((item) => {
      const product = products.filter(product => product.id === item.id)[0];
      return <SummaryProductTile key={item.id} cartProduct={item} product={product} />;
    }));
  }, [products, cartItems]);

  useEffect(() => {
    if(!isLoading) {
      let price = 0;

      cartItems.forEach((item) => {
        const product = products.filter(product => product.id === item.id)[0];
        price += item.quantity * product.price;
      });

      setSubTotalPrice(price);
      setTax(0.08 * price);
      setTotal(price + 0.08 * price);
    };
  }, [isLoading, products, cartItems, setSubTotalPrice, setTax, setTotal]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

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
