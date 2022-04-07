import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import * as styles from "./ProductEditDialogStyles";

export default function ProductEditDialog({ isOpen, toggleModal, product }) {
  const [formState, setFormState] = useState({
    name: "",
    sku: "",
    description: "",
    price: 0,
    quantity: 0,
    category: "",
  });

  const setFormDataToProductData = () => {
    setFormState({
      name: product.name,
      sku: product.sku,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
    });
  }

  const changeValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (isOpen) {
      setFormDataToProductData();
    }
  }, [isOpen]);

  return (
    <Dialog maxWidth="lg" fullWidth open={isOpen} onClose={toggleModal}>
      <DialogTitle>Edit {product ? product.name : ""}</DialogTitle>
      <DialogContent>
        <Grid container>

          <Grid item xs={12} md={1} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Name</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="name"
              variant="outlined"
              value={formState.name}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={styles.labelContainer}>
            <Typography sx={styles.label}>SKU</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="sku"
              variant="outlined"
              value={formState.sku}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Price</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              name="price"
              variant="outlined"
              value={formState.price}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Quantity</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              name="quantity"
              variant="outlined"
              value={formState.quantity}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Category</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              name="category"
              variant="outlined"
              value={formState.category}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} sx={styles.labelContainer}>
            <Typography sx={{...styles.label, ...styles.descriptionLabel}}>Description</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              variant="outlined"
              value={formState.description}
              onChange={changeValue}
              fullWidth
              multiline
              rows={5}
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} sx={styles.buttonContainer}>
            <Button sx={styles.button} variant="contained" size="large" color="error" onClick={setFormDataToProductData}>Reset</Button>
            <Button sx={styles.button} variant="contained" size="large">Save</Button>
          </Grid>

        </Grid>
      </DialogContent>
    </Dialog>
  );
}
