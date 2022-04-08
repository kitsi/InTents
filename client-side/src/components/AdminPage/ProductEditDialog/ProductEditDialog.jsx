import React, { useState, useEffect } from "react";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import * as styles from "./ProductEditDialogStyles";

export default function ProductEditDialog({ isOpen, toggleModal, product, newProduct }) {
  const [formState, setFormState] = useState({
    name: "",
    sku: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
    category: "",
  });

  const setFormDataToProductData = () => {
    setFormState({...product});
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
      <DialogTitle>
        {newProduct ? "Create New Product" : `Edit "${formState.name}"`}
        <IconButton sx={styles.closeButton} onClick={toggleModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>

        <Box sx={styles.imageContainer}>
          <Box component="img" src={formState.image} sx={styles.image} />
        </Box>

        <Grid container columnSpacing={2}>

          <Grid item xs={12} md={6}>
            <Grid item xs={12} sx={styles.labelContainer}>
              <Typography sx={styles.label}>Name</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                value={formState.name}
                onChange={changeValue}
                fullWidth
                sx={styles.textBox}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={12} sx={styles.labelContainer}>
              <Typography sx={styles.label}>SKU</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="sku"
                variant="outlined"
                value={formState.sku}
                onChange={changeValue}
                fullWidth
                sx={styles.textBox}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid item xs={12} sx={styles.labelContainer}>
              <Typography sx={styles.label}>Price</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="price"
                variant="outlined"
                value={formState.price}
                onChange={changeValue}
                fullWidth
                sx={styles.textBox}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid item xs={12} sx={styles.labelContainer}>
              <Typography sx={styles.label}>Quantity</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="quantity"
                variant="outlined"
                value={formState.quantity}
                onChange={changeValue}
                fullWidth
                sx={styles.textBox}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid item xs={12} sx={styles.labelContainer}>
              <Typography sx={styles.label}>Category</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="category"
                variant="outlined"
                value={formState.category}
                onChange={changeValue}
                fullWidth
                sx={styles.textBox}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Description</Typography>
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

          <Grid item xs={12} sx={styles.labelContainer}>
            <Typography sx={styles.label}>Image URL</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              variant="outlined"
              value={formState.image}
              onChange={changeValue}
              fullWidth
              sx={styles.textBox}
            />
          </Grid>

          <Grid item xs={12} sx={styles.buttonContainer}>
            <Button sx={styles.button} variant="contained" size="large" color="error" onClick={setFormDataToProductData} disabled={newProduct}>Reset</Button>
            <Button sx={styles.button} variant="contained" size="large">Save</Button>
          </Grid>

        </Grid>
      </DialogContent>
    </Dialog>
  );
}
