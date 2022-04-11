import React from "react";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as styles from "./NotFoundPageStyles";
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container sx={styles.pageContainer}>
      <Box>
        <Typography variant="h2">404 Something Went Wrong</Typography>
        <Divider />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button variant="contained" component={Link} to="/">
          Go To Home Page
        </Button>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
      <img
        style={styles.notFoundImage}
        src="https://i.imgur.com/hBQsejY.png"
        alt="Page Not Found"
      ></img>
    </Container>
  );
}

export default NotFoundPage;
