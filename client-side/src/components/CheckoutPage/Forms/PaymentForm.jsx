import React, { useState } from "react";

import { Container, Grid, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPaymentForm } from "../checkoutSlice";
import { clearCart } from "../../CartPage/cartSlice";
import paymentFormSchema from "../validations/PaymentFormSchema";
import { useFormik } from "formik";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import StripeInput from "../StripeInput";

const PaymentForm = (props, { handleModalOpen }) => {
  const dispatch = useDispatch();

  const [paymentFormData, setPaymentFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
  });
  const initialpaymentFormData = {
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
  };

  const handleSubmit = (e) => {
    // submit
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Name On Card"
              name="nameOnCard"
              value={paymentFormData.nameOnCard}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                  component: CardNumberElement,
                },
              }}
              value={paymentFormData.cardNumber}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="Expiration"
              name="expiration"
              InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                  component: CardExpiryElement,
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="CVC"
              name="cvc"
              InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                  component: CardCvcElement,
                },
              }}
              value={paymentFormData.cvc}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              marginTop: "1rem",
            }}
          >
            Place Order
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PaymentForm;
