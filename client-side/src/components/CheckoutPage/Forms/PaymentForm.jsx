import React, { useState } from "react";

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
import axios from "axios";

const PaymentForm = (props, { handleModalOpen }) => {
  const dispatch = useDispatch();

  const { orderTotal } = props;

  const [paymentFormData, setPaymentFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

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

  // Stripe create paymentIntent and make an API call to Stripe to retrieve client secret
  const getClientSecret = (data) => {
    const url = "http://localhost:8080/api/create-payment-intent/";
    return new Promise(async (resolve) => {
      const {
        data: { clientSecret },
      } = await axios.post(url, data);
      resolve(clientSecret);
    });
  };

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    // Order total should eventually be calculated in the backend once products table is set up for security reasons
    const data = { amount: orderTotal };
    const clientSecret = await getClientSecret(data);

    const cardElement = elements.getElement(CardNumberElement);

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
            disabled={isLoading || !stripe || !elements}
          >
            Place Order
          </Button>
        </Box>
        {/* Show any error or success messages  */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Container>
  );
};

export default PaymentForm;
