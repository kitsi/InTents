import React from "react";
import { Box } from "@mui/material";
import * as styles from "./SearchBarStyles";

const SearchBar = () => {
  return (
    <Box sx={styles.search}>
      <Box sx={styles.searchIconWrapper}>
        <SearchIcon />
      </Box>
      <Box
        sx={styles.styledInputBase}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchBar;
