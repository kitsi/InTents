import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../../CartPage/cartSlice";
import { useSelector } from "react-redux";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StripeInput from "../StripeInput";
import axios from "axios";
import * as styles from "./FormStyles";
import { baseUrl } from "../../../utilities/strings";

const PaymentForm = ({ handleModalOpen, clearOrderSummary, orderTotal }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const stripe = useStripe();
  const elements = useElements();

  // Stripe card validation
  const [cardNumErrorMsg, setCardNumErrorMsg] = useState(null);
  const [expDateErrorMsg, setExpDateErrorMsg] = useState(null);
  const [cvcErrorMsg, setCvcErrorMsg] = useState(null);
  const [customerName, setCustomerName] = useState("");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const hasError = cardNumErrorMsg !== null;
  const expError = expDateErrorMsg !== null;
  const cvcError = cvcErrorMsg !== null;

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const clearForm = () => {
    elements.getElement(CardCvcElement).clear();
    elements.getElement(CardNumberElement).clear();
    elements.getElement(CardExpiryElement).clear();
    setCustomerName("");
  };

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

  // Stripe create paymentIntent and make an API call to Stripe to retrieve client secret
  const getClientSecret = (data) => {
    const url = `${baseUrl}/api/create-payment-intent/`;
    return new Promise(async (resolve) => {
      const {
        data: { clientSecret },
      } = await axios.post(url, data).catch((err) => {
        if (cartItems.length === 0) {
          setMessage("Your cart is empty");
        } else {
          setMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
      });
      resolve(clientSecret);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (!stripe || !elements) {
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
        billing_details: {
          name: customerName,
        },
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else {
      handleModalOpen();
      dispatch(clearCart());
      clearForm();
      clearOrderSummary();
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
              value={customerName}
              onChange={handleNameChange}
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
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Box sx={styles.submitButtonWrapper}>
          {/* Show any error or success messages  */}
          {message && (
            <Alert sx={styles.errorAlert} variant="filled" severity={"error"}>
              {message}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submitButton}
            disabled={isLoading || !stripe || !elements || customerName === ""}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={styles.loadingIcon} />
            ) : (
              "Place Order"
            )}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PaymentForm;
