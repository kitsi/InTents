import React, { useState } from "react";

import Box from "@mui/material/Box";
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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
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
      <div>
        <TextField
          error
          label="Address"
          fullWidth
          value={shippingInfo.addressLineOne}
        />
      </div>
      <div>
        <TextField label="Address 2" value={shippingInfo.addressLineTwo} />
      </div>
      <div>
        <TextField label="City" value={shippingInfo.city} />
        <TextField label="City" value={shippingInfo.state} />
        <TextField label="Zip Code" value={shippingInfo.zip} />
      </div>
    </Box>
  );
}

export default AddressForm;
