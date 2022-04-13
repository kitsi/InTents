import { Box, Drawer, Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import React from "react";
import * as styles from "./NavBarStyles";

export default function SideDrawer({ isOpen, toggleDrawer, pages }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <Box onClick={toggleDrawer} sx={styles.drawerContainer}>
        <Button
          to="/products"
          component={NavLink}
          sx={{ ...styles.link, ...styles.darkFont }}
        >
          All Products
        </Button>
        {pages.map((page) => (
          <Button
            to={`/products/categories/${page
              .split(" ")
              .join("-")
              .toLowerCase()}`}
            key={page}
            component={NavLink}
            sx={{ ...styles.link, ...styles.darkFont }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
}
