import "./ProductTile.css";

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

export default function ProductTile({ productData }) {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="200"
        image={productData.image}
        alt={productData.name}
        className="product-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productData.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${productData.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="product-description"
        >
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartOutlinedIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
