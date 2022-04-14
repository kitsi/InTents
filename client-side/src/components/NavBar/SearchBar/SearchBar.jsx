import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import * as styles from "./SearchBarStyles";
import getProducts from "../../../api/getProducts";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const lowerCaseText = e.target.value.toLowerCase();
    setSearchText(lowerCaseText);
  };

  const handleSubmit = async () => {
    const { products, success, totalPages, pageNumber } = await getProducts(
      0,
      0,
      10,
      searchText
    );
    const searchProducts = products;
    const searchSuccess = success;
    const searchTotalPages = totalPages;
    const searchPageNumber = pageNumber;

    navigate("/products", {
      state: {
        searchProducts,
        searchSuccess,
        searchTotalPages,
        searchPageNumber,
        searchText,
      },
    });
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
      <Button
        sx={styles.searchButton}
        variant="outlined"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
