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
import getCategories from "../../../api/getCategories";
import * as styles from "./ProductEditDialogStyles";
import axios from 'axios'
import { baseUrl } from "../../../utilities/strings";

export default function ProductEditDialog({ isOpen, toggleModal, product, newProduct }) {
  const [formState, setFormState] = useState({
    title: "",
    sku: "",
    description: "",
    price: 0,
    inventory: {
      quantity: 0,
    },
    image: "",
    category: {
      categoryId: 1,
    },
  });

  const [categories, setCategories] = useState([]);

  const resetFormData = () => {
    setFormState({...product});
  }

  const changeValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const changeValueQuantity = (event) => {
    setFormState({ ...formState, inventory: { ...formState.inventory, quantity: event.target.value } });
  };

  const changeValueCategory = (event) => {
    setFormState({ ...formState, category: { ...formState.category, categoryId: event.target.value } });
  };

  useEffect(() => {
    const refreshCategories = async () => {
      setCategories(await getCategories());
    }

    refreshCategories();
  }, []);

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
  
    toggleModal();
  }

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
                name="title"
                variant="outlined"
                value={formState.title}
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
                variant="outlined"
                value={formState.inventory.quantity}
                onChange={changeValueQuantity}
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
              <Select fullWidth value={formState.category.categoryId} onChange={changeValueCategory}>
                {categories.map(category => 
                  <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
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
