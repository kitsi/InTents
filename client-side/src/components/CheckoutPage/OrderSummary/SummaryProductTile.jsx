import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as styles from "./OrderSummaryStyles";
import formatCurrency from "../../../utilities/formatCurrency";

function SummaryProductTile({ product }) {
  const item = product.product;
  return (
    <Card sx={styles.productContainer}>
      <Typography sx={styles.quantity}>{product.quantity}</Typography>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={styles.cardImage}
      />
      <CardContent sx={styles.cardContentContainer}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.cardTitle}
        >
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatCurrency(item.price * product.quantity)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryProductTile;
