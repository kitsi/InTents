import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

const labelContainerStyles = {
  display: "flex",
  alignItems: "center",
};
const labelStyles = {
  width: "100%",
  textAlign: {
    xs: "left",
    md: "right",
  },
  paddingRight: "1rem",
  marginBottom: "1.5rem",
};
const textBoxStyles = {
  marginBottom: "1.5rem",
};

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
          <Grid item xs={12} md={1} sx={labelContainerStyles}>
            <Typography sx={labelStyles}>Name</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="name"
              variant="outlined"
              value={formState.name}
              onChange={changeValue}
              fullWidth
              sx={textBoxStyles}
            />
          </Grid>
          <Grid item xs={12} md={1} sx={labelContainerStyles}>
            <Typography sx={labelStyles}>SKU</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              name="sku"
              variant="outlined"
              value={formState.sku}
              onChange={changeValue}
              fullWidth
              sx={textBoxStyles}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
