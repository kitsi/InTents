import React from "react";
import { Box, TextField } from "@mui/material";
import * as styles from "./SearchBarStyles";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box sx={styles.search}>
      <TextField
        sx={styles.styledInputBase}
        variant="outlined"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchBar;
