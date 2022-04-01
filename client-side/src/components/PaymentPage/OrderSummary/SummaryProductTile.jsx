import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function SummaryProductTile({ product }) {
  const item = product.product;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row ",
        height: "100px",
        marginBottom: "1rem",
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={{
          width: "20%",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "0.9rem",
          }}
        >
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryProductTile;
