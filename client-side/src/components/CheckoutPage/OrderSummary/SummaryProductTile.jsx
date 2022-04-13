import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as styles from "./OrderSummaryStyles";
import formatCurrency from "../../../utilities/formatCurrency";

function SummaryProductTile({ cartProduct, product }) {
  return (
    <Card sx={styles.productContainer}>
      <Typography sx={styles.quantity}>{cartProduct.quantity}</Typography>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={styles.cardImage}
      />
      <CardContent sx={styles.cardContentContainer}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.cardTitle}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatCurrency(cartProduct.quantity * product.price)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryProductTile;
