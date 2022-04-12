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
  Select,
  MenuItem
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import * as styles from "./ProductEditDialogStyles";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../ProductsPage/productsSlice";
import { baseUrl } from "../../../utilities/strings";

export default function ProductEditDialog({ isOpen, toggleModal, product, newProduct }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: "",
    sku: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
    category: "",
  });

  const resetFormData = () => {
    setFormState({...product});
  }

  const changeValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const changeValueCategory = (event) => {
    setFormState({ ...formState, "category": event.target.value });
  };

  useEffect(() => {
    if (isOpen) {
      setFormState({...product});
    }
  }, [isOpen, product]);

  const sendProductToServer = async() => {
    if(newProduct) {
      await axios.post(`${baseUrl}/products`, formState);
    } else {
      await axios.put(`${baseUrl}/products/${product.id}`, formState);
    }
  
    dispatch(fetchProducts());
    toggleModal();
  }

  const categories = ["tents", "cookware", "sleeping-bags", "fans", "emergency"];

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
              <Select fullWidth value={formState.category} onChange={changeValueCategory}>
                {categories.map(category => 
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                )}
              </Select>
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
            <Button sx={styles.button} variant="contained" size="large" color="error" onClick={resetFormData} disabled={newProduct}>Reset</Button>
            <Button sx={styles.button} variant="contained" size="large" onClick={sendProductToServer}>Save</Button>
          </Grid>

        </Grid>
      </DialogContent>
    </Dialog>
  );
}
