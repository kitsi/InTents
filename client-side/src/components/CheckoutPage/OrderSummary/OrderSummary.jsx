import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderTotal } from "../checkoutSlice";
import SummaryProductTile from "./SummaryProductTile";
import { useSelector } from "react-redux";
import * as styles from "./OrderSummaryStyles";
import formatCurrency from "../../../utilities/formatCurrency";
import axios from "axios";
import { baseUrl } from "../../../utilities/strings";
import Loading from "../../common/Loading";

function OrderSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setOrderTotal(total));
  }, [total, dispatch]);

  useEffect(() => {
    const updateAllProducts = async () => {
      const productArray = [];
  
      for (let i = 0; i < cartItems.length; i++) {
        const { data } = await axios.get(`${baseUrl}/products/${cartItems[i].id}`);
        productArray.push(data);
      }
  
      setProducts(productArray);
      setLoading(false);
    }

    updateAllProducts();
  }, [cartItems]);

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
    }
  }, [isLoading, products, cartItems]);

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
