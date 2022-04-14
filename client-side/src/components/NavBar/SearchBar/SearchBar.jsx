import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import * as styles from "./SearchBarStyles";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const lowerCaseText = e.target.value.toLowerCase();
    setSearchText(lowerCaseText);
  };

  return (
    <Box sx={styles.search}>
      <TextField
        sx={styles.styledInputBase}
        variant="outlined"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        value={searchText}
      />
      <Button sx={styles.searchButton} variant="outlined">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
