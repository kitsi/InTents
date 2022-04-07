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
  });

  const setFormDataToProductData = () => {
    setFormState({
      name: product.name,
      sku: product.sku,
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

          <Grid item xs={12} md={1} sx={styles.labelContainerStyles}>
            <Typography sx={styles.labelStyles}>Name</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="name"
              variant="outlined"
              value={formState.name}
              onChange={changeValue}
              fullWidth
              sx={styles.textBoxStyles}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={styles.labelContainerStyles}>
            <Typography sx={styles.labelStyles}>SKU</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="sku"
              variant="outlined"
              value={formState.sku}
              onChange={changeValue}
              fullWidth
              sx={styles.textBoxStyles}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ marginX: "0.5rem" }} variant="contained" size="large" color="error" onClick={setFormDataToProductData}>Reset</Button>
            <Button sx={{ marginX: "0.5rem" }} variant="contained" size="large">Save</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
