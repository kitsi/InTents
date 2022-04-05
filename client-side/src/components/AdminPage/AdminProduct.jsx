import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function AdminProduct({ productData, editProduct }) {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="200"
        image={productData.image}
        alt={productData.name}
        className="product-image"
      />
      <CardContent className="product-details">
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
          onClick={() => editProduct(productData)}
        >
          Edit
        </Button>
        <Button size="small" variant="contained" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default AdminProduct;
