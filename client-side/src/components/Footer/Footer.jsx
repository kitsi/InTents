import React from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "./FooterStyles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faYoutube} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <Box sx={styles.container}>
      <Typography>
      &copy; 2022
      </Typography>
    </Box>
  )
}