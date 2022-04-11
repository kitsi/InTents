import React, { useState, useEffect } from "react";

import { Container, Grid, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPaymentForm } from "../checkoutSlice";
import { clearCart } from "../../CartPage/cartSlice";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StripeInput from "../StripeInput";
import axios, { Axios } from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault(e);
  };

  // Stripe card validation
  const [cardNumErrorMsg, setCardNumErrorMsg] = useState(null);
  const [expDateErrorMsg, setExpDateErrorMsg] = useState(null);
  const [cvcErrorMsg, setCvcErrorMsg] = useState(null);

  const handleChange = ({ error }) => {
    if (error) {
      if (
        error.code === "incomplete_number" ||
        error.code === "invalid_number"
      ) {
        setCardNumErrorMsg(error.message);
      }
      if (
        error.code === "incomplete_expiry" ||
        error.code === "invalid_expiry_year_past" ||
        error.code === "invalid_expiry_month_past"
      ) {
        setExpDateErrorMsg(error.message);
      }

      if (error.code === "incomplete_cvc") {
        setCvcErrorMsg(error.message);
      }
    } else {
      setCardNumErrorMsg(null);
      setExpDateErrorMsg(null);
      setCvcErrorMsg(null);
    }
  };

  const hasError = cardNumErrorMsg !== null;
  const expError = expDateErrorMsg !== null;
  const cvcError = cvcErrorMsg !== null;

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
              error={hasError}
              helperText={hasError ? cardNumErrorMsg || "Invalid" : ""}
              onChange={handleChange}
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
              error={expError}
              helperText={expError ? expDateErrorMsg || "Invalid" : ""}
              onChange={handleChange}
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
              error={cvcError}
              helperText={cvcError ? cvcErrorMsg || "Invalid" : ""}
              onChange={handleChange}
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
