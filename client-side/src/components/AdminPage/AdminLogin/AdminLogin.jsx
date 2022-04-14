import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import adminLoginSchema from "./AdminLoginSchema";
import * as styles from "./AdminLoginStyles";
import { useDispatch } from "react-redux";
import { setToken } from "./adminSlice";
function AdminLogin() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: adminLoginSchema,

    onSubmit: (values) => {
      // setup post req
      dispatch(setToken("Temp Token"));
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Container sx={styles.loginContainer}>
      <Typography variant="h2" sx={styles.header}>
        Admin Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              type="email"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              color="primary"
              variant="contained"
              fullWidth={true}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
export default AdminLogin;
