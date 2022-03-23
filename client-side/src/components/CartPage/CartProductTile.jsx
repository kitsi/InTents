import "./cartProductTile.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function CartProductTile({ product }) {
  const item = product.product;

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
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Typography className="qty-label">{product.quantity}</Typography>
          <IconButton>
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
