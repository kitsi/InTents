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

function CartProductTile({ product }) {
  const item = product.product;
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(incrementProduct(product));
  };

  const subtractOne = () => {
    dispatch(decrementProduct(product));
  };

  const removeItem = () => {
    dispatch(removeProduct(product));
  };

  return (
    <Card sx={styles.cartCard}>
      <Typography sx={styles.cardTotal}>
        {formatCurrency(item.price * product.quantity)}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
        sx={styles.productImage}
      />
      <CardContent sx={styles.productDetails}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatCurrency(item.price)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.productDescription}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Box sx={styles.quantityChange}>
          <IconButton onClick={subtractOne} disabled={product.quantity <= 1}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={styles.qtyLabel}>{product.quantity}</Typography>
          <IconButton onClick={addOne}>
            <AddIcon />
          </IconButton>
        </Box>
        <IconButton size="large" sx={styles.deleteIcon} onClick={removeItem}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CartProductTile;
