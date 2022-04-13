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
import * as styles from "../../components/ProductsPage/ProductTileStyles";
import { baseUrl } from "../../utilities/strings";
import formatCurrency from "../../utilities/formatCurrency";

function AdminProduct({ productData, editProduct }) {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    await axios.delete(`${baseUrl}/products/${productData.id}`);
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
          {productData.title}
        </Typography>
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
