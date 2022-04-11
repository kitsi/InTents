import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addProduct } from "../CartPage/cartSlice";
import { Link } from "react-router-dom";
import * as styles from "./ProductTileStyles";
import formatCurrency from "../../utilities/formatCurrency";

export default function ProductTile({ productData }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(
      addProduct({
        quantity: 1,
        product: productData,
      })
    );
  }

  return (
    <Card sx={styles.card}>
      <Link to={`/product/${productData.sku}`}>
        <CardMedia
          component="img"
          height="200"
          image={productData.image}
          alt={productData.name}
          sx={styles.productImage}
        />
      </Link>
      <CardContent sx={styles.productDetails}>
        <Link to={`/product/${productData.sku}`}>
          <Typography gutterBottom variant="h5" component="div">
            {productData.name}
          </Typography>
        </Link>
        <Typography variant="body1" color="text.secondary">
          {formatCurrency(productData.price)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.productDescription}
        >
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartOutlinedIcon />}
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
