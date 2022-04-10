import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../ProductsPage/productsSlice";
import * as styles from "../common/ProductTileStyles";

function AdminProduct({ productData, editProduct }) {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:3001/products/${productData.id}`);
    dispatch(fetchProducts());
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={productData.image}
        alt={productData.name}
        sx={styles.productImage}
      />
      <CardContent sx={styles.productDetails}>
        <Typography gutterBottom variant="h5" component="div">
          {productData.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${productData.price}
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
          onClick={() => editProduct(productData)}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={deleteProduct}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default AdminProduct;
