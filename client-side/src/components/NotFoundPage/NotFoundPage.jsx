import React from "react";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import * as styles from "./NotFoundPageStyles";
function NotFoundPage() {
  return (
    <Container sx={styles.pageContainer}>
      <Box sx={styles.header}>
        <Typography variant="h2">404 Something Went Wrong</Typography>
        <Divider />
      </Box>
      <img
        width={"95%"}
        src="https://i.imgur.com/hBQsejY.png"
        alt="Page Not Found"
      ></img>
      <Button sx={styles.button} variant="contained" component={Link} to="/">
        Go To Home Page
      </Button>
    </Container>
  );
}

export default NotFoundPage;
