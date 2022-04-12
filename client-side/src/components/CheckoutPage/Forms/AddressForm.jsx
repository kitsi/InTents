import { Button, Container, Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddressForm } from "../checkoutSlice";
import addressFormSchema from "./AddressFormSchema";
import { useFormik } from "formik";
import * as styles from "./FormStyles";

const AddressForm = (props) => {
  const { openPaymentAccordion } = props;
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Next");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      state: "",
      zip: "",
    },

    validationSchema: addressFormSchema,

    onSubmit: (values) => {
      // execute async function to send to backend
      openPaymentAccordion();
      dispatch(setAddressForm(values));
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ""}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ""}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Address"
              name="addressLineOne"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.addressLineOne ? errors.addressLineOne : ""}
              error={touched.addressLineOne && Boolean(errors.addressLineOne)}
              value={values.addressLineOne}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Address 2"
              name="addressLineTwo"
              value={values.addressLineTwo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.addressLineTwo && Boolean(errors.addressLineTwo)}
              helperText={touched.addressLineTwo ? errors.addressLineTwo : ""}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city ? errors.city : ""}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && Boolean(errors.state)}
              helperText={touched.state ? errors.state : ""}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              fullWidth
              label="Zip Code"
              name="zip"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.zip && Boolean(errors.zip)}
              helperText={touched.zip ? errors.zip : ""}
            />
          </Grid>
        </Grid>
        <Box sx={styles.submitButtonWrapper}>
          <Button
            type="submit"
            size="large"
            color="primary"
            variant="contained"
            sx={styles.submitButton}
            onClick={() => {
              setButtonText("Update");
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddressForm;
