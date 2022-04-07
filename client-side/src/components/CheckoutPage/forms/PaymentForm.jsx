import React, { useState } from "react";

import { Container, Grid, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import paymentFormSchema from "../validations/PaymentFormSchema";
import { withFormik } from "formik";

function form(props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

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
        <Button type="submit" color="primary" disabled={isSubmitting}>
          Continue
        </Button>
      </form>
    </Container>
  );
}

// function PaymentForm() {
//   const [paymentInfo, setPaymentInfo] = new useState({
//     nameOnCard: "",
//     cardNumber: "",
//     expiration: "",
//     cvc: "",
//   });

//   const handleChange = (e) => {
//     setPaymentInfo({
//       ...paymentInfo,
//       [e.target.name]: e.target.value,
//     });
//   };
// }

const PaymentForm = (props) => {
  // const { setPaymentDisabled } = props;

  const MyFormWithFormik = withFormik({
    mapPropsToValues: ({ nameOnCard, cardNumber, expiration, cvc }) => {
      return {
        nameOnCard: nameOnCard || "",
        cardNumber: cardNumber || "",
        expiration: expiration || "",
        cvc: cvc || "",
      };
    },

    validationSchema: paymentFormSchema,

    handleSubmit: (values, { setSubmitting }) => {
      // execute async function to send to backend
      // setPaymentDisabled(false);
      console.log(values);
    },
  })(form);

  return <MyFormWithFormik />;
};

export default PaymentForm;
