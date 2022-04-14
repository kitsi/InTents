import React from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "./FooterStyles";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.socialContainer}>
        <Typography>Follow Us</Typography>
        <YouTubeIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </Box>
      <Typography>&copy; 2022 InTents</Typography>
    </Box>
  );
}
