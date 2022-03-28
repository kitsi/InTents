import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PaymentForm() {
  const [paymentInfo, setPaymentInfo] = new useState({
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Name On Card"
            name="nameOnCard"
            onChange={(e) => handleChange(e)}
            value={paymentInfo.nameOnCard}
          />
        </div>
        <div>
          <TextField
            label="Card Number"
            fullWidth
            onChange={(e) => handleChange(e)}
            value={paymentInfo.cardNumber}
          />
        </div>

        <div>
          <TextField
            label="Expiration"
            value={paymentInfo.expiration}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="CVC"
            value={paymentInfo.cvc}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </Box>
    </div>
  );
}

export default PaymentForm;
