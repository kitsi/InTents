import React from "react";
import * as styles from "./PaginationBarStyles";
import { Box, Button, Typography } from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationBar({ curPage, totalPages, setCurPage }) {
  const incrementPage = () => {
    setCurPage(curPage + 1);
  }

  const decrementPage = () => {
    setCurPage(curPage - 1);
  }

  return (
    <Box sx={styles.container}>
      <Button variant="contained" onClick={decrementPage} disabled={curPage === 0}><ArrowBackIcon /></Button>
      <Box sx={styles.stats}>
        <Typography>Page {curPage + 1} of {totalPages}</Typography>
      </Box>
      <Button variant="contained" onClick={incrementPage} disabled={(curPage + 1) === totalPages}><ArrowForwardIcon /></Button>
    </Box>
  );
}
