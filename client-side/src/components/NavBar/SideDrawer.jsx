import "./SideDrawer.css"
import { Box, Drawer, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import React from "react";

export default function SideDrawer({ isOpen, toggleDrawer, pages }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} className="drawer">
      <Box onClick={toggleDrawer} className="drawer-container">
        <NavLink
          to="/products/"
          className={({ isActive }) =>
            isActive ? `active link` : `link`
          }
        >
          <Typography>All Products</Typography>
        </NavLink>
        {pages.map((page) => (
          <NavLink
            to={`/products/categories/${page.split(' ').join('-').toLowerCase()}`}
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
