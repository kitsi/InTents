import React, { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import addressFormSchema from "./AddressFormSchema";
import { withFormik } from "formik";
import * as yup from "yup";

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
      <form>
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
        <Button type="submit" color="primary" disabled={isSubmitting}>
          SUBMIT
        </Button>
      </form>
    </Container>
  );
}

const AddressForm = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    addressLineOne,
    addressLineTwo,
    city,
    state,
    zip,
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      addressLineOne: addressLineOne || "",
      addressLineTwo: addressLineTwo || "",
      city: city || "",
      state: state || "",
      zip: zip || "",
    };
  },

  validationSchema: addressFormSchema,

  handleSubmit: (values, { setSubmitting }) => {
    // execute async function to send to backend
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(form);

export default AddressForm;
