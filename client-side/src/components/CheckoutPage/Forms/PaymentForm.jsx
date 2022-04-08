import React from "react";

import { Container, Grid, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPaymentForm } from "../checkoutSlice";

import paymentFormSchema from "../validations/PaymentFormSchema";
import { useFormik } from "formik";

const PaymentForm = ({ handleModalOpen }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nameOnCard: "",
      cardNumber: "",
      expiration: "",
      cvc: "",
    },

    validationSchema: paymentFormSchema,

    onSubmit: (values) => {
      // execute async function to send to backend
      dispatch(setPaymentForm(values));
      handleModalOpen();
    },
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Name On Card"
              name="nameOnCard"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.nameOnCard ? errors.nameOnCard : ""}
              error={touched.nameOnCard && Boolean(errors.nameOnCard)}
              value={values.nameOnCard}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="Card Number"
              name="cardNumber"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.cardNumber ? errors.cardNumber : ""}
              error={touched.cardNumber && Boolean(errors.cardNumber)}
              value={values.cardNumber}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="Expiration"
              name="expiration"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.expiration ? errors.expiration : ""}
              error={touched.expiration && Boolean(errors.expiration)}
              value={values.expiration}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="CVC"
              name="cvc"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.cvc ? errors.cvc : ""}
              error={touched.cvc && Boolean(errors.cvc)}
              value={values.cvc}
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
            disabled={isSubmitting}
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
