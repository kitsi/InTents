import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

function SummaryProductTile({ product }) {
  const item = product.product;
  return (
    <Card className="cart-card">
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
        className="product-image"
      />
      <CardContent className="product-details">
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${item.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="cart-product-description"
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryProductTile;
