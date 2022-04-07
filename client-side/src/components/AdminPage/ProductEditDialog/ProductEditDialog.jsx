import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

export default function ProductEditDialog({ isOpen, toggleModal, product }) {
  const [formState, setFormState] = useState({
    name: "",
    sku: "",
  });

  const changeValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <Dialog maxWidth="lg" fullWidth open={isOpen} onClose={toggleModal}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Name: </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="name"
              variant="outlined"
              value={formState.name}
              onChange={changeValue}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>SKU: </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="sku"
              variant="outlined"
              value={formState.sku}
              onChange={changeValue}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
