import "./NavBar.css";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCartOutlined } from "@mui/icons-material";
import SideDrawer from "./SideDrawer";
import {useSelector } from "react-redux";

// Add pages from wireframe
const pages = [
  "Tents",
  "Cookware",
  "Sleeping Bags",
  "Fans",
  "Emergency",
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const badgeCount = () => {
    let count = 0;
    cartItems.map(item => {
      count += item.quantity
    })
    return count
  };

  return (
    <AppBar position="sticky">
      <SideDrawer
        isOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        pages={pages}
      />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            InTents
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            InTents
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="links-container"
          >
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
                className={({ isActive }) =>
                  isActive ? `active link` : `link`
                }
              >
                <Typography>{page}</Typography>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <Link to="/cart" className="link">
                <Badge badgeContent={badgeCount()}>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
