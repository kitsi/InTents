import "./cartProductTile.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { incrementProduct, decrementProduct } from "./cartSlice";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function CartProductTile({ product }) {
  const item = product.product;
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(incrementProduct());
  }

  const subtractOne = () => {
    dispatch(decrementProduct());
  }

  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
        className="product-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${item.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="product-description"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <div className="quantity-change">
          <IconButton onClick={subtractOne}>
            <RemoveIcon />
          </IconButton>
          <Typography className="qty-label">{product.quantity}</Typography>
          <IconButton onClick={addOne}>
            <AddIcon />
          </IconButton>
        </div>
        <IconButton size="large" className="delete-icon">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CartProductTile;
