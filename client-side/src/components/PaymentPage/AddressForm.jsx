import React, { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
      >
        <div>
          <TextField
            label="First Name"
            name="firstName"
            onChange={(e) => handleChange(e)}
            value={shippingInfo.firstName}
          />
          <TextField label="Last Name" value={shippingInfo.lastName} />
        </div>
        <Box
          sx={{
            maxWidth: "50%",
          }}
        >
          <TextField
            label="Address"
            fullWidth
            onChange={(e) => handleChange(e)}
            value={shippingInfo.addressLineOne}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "50%",
          }}
        >
          <TextField
            label="Address 2"
            fullWidth
            value={shippingInfo.addressLineTwo}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <div>
          <TextField
            label="City"
            value={shippingInfo.city}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="State"
            value={shippingInfo.state}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Zip Code"
            value={shippingInfo.zip}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </Box>
    </Container>
  );
}

export default AddressForm;
