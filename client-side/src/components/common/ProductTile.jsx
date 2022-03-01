import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ProductTile({ productData }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={productData.image}
        alt={productData.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<ShoppingCartOutlinedIcon/>}>Add to cart</Button>
      </CardActions>
    </Card>
  )
}
