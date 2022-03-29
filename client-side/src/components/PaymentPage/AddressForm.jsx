import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Grid } from "@mui/material";

function AddressForm() {
  const [shippingInfo, setShippingInfo] = new useState({
    firstName: "",
    lastName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            onChange={(e) => handleChange(e)}
            value={shippingInfo.firstName}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            onChange={(e) => handleChange(e)}
            value={shippingInfo.lastName}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Address"
            name="addressLineOne"
            onChange={(e) => handleChange(e)}
            value={shippingInfo.addressLineOne}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Address 2"
            name="addressLineTwo"
            value={shippingInfo.addressLineTwo}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={4} md={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={shippingInfo.city}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={4} md={4}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={shippingInfo.state}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={4} md={4}>
          <TextField
            fullWidth
            label="Zip Code"
            name="zip"
            value={shippingInfo.zip}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddressForm;
