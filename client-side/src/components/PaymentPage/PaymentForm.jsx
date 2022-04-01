import React, { useState } from "react";

import { Container, Grid, TextField } from "@mui/material";

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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Name On Card"
            name="nameOnCard"
            onChange={(e) => handleChange(e)}
            value={paymentInfo.nameOnCard}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            label="Card Number"
            fullWidth
            onChange={(e) => handleChange(e)}
            value={paymentInfo.cardNumber}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
            fullWidth
            label="Expiration"
            value={paymentInfo.expiration}
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
            fullWidth
            label="CVC"
            value={paymentInfo.cvc}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentForm;
