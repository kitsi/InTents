import { Box, Drawer, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import React from "react";

export default function SideDrawer({ isOpen, toggleDrawer, pages }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <Box onClick={toggleDrawer}>
        {pages.map((page) => (
          <NavLink
            to="/products/"
            key={page}
            className={({ isActive }) => (isActive ? `active link` : `link`)}
          >
            <Typography>{page}</Typography>
          </NavLink>
        ))}
      </Box>
    </Drawer>
  );
}
