import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { incrementProduct, decrementProduct, removeProduct } from "./cartSlice";
import * as styles from "./CartProductTileStyles";
import formatCurrency from "../../utilities/formatCurrency";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import Loading from "../common/Loading";

function CartProductTile({ cartProduct, product }) {
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(incrementProduct(cartProduct));
  };

  const subtractOne = () => {
    dispatch(decrementProduct(cartProduct));
  };

  const removeItem = () => {
    dispatch(removeProduct(cartProduct));
  };

  if (!product) {
    return (
      <Card sx={styles.cartCard}>
        <Loading />
      </Card>
    );
  }

  return (
    <Card sx={styles.cartCard}>
      <Typography sx={styles.cardTotal}>
        {formatCurrency(product.price * cartProduct.quantity)}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={styles.productImage}
      />
      <CardContent sx={styles.productDetails}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatCurrency(product.price)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.productDescription}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Box sx={styles.quantityChange}>
          <IconButton
            onClick={subtractOne}
            disabled={cartProduct.quantity <= 1}
            aria-label="remove-one"
          >
            <RemoveIcon />
          </IconButton>
          <Typography sx={styles.qtyLabel}>{cartProduct.quantity}</Typography>
          <IconButton onClick={addOne} aria-label="add-one">
            <AddIcon />
          </IconButton>
        </Box>
        <IconButton
          size="large"
          sx={styles.deleteIcon}
          onClick={removeItem}
          aria-label="remove-from cart"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CartProductTile;
