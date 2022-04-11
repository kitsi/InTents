import React from "react";
import { Box, CircularProgress } from "@mui/material";
import * as styles from "./LoadingStyles";
export default function Loading() {
  return (
    <Box sx={styles.loadingContainer}>
      <CircularProgress size={75} />
    </Box>
  );
}
