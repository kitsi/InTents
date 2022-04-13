import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCartOutlined } from "@mui/icons-material";
import SideDrawer from "./SideDrawer";
import { useSelector } from "react-redux";
import * as styles from "./NavBarStyles";
// Add pages from wireframe
const pages = ["Tents", "Cookware", "Sleeping Bags", "Fans", "Emergency"];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const badgeCount = () => {
    let count = 0;
    cartItems.map((item) => (count += item.quantity));
    return count;
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
            variant="h1"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              ...styles.link,
              ...styles.headerTitle,
            }}
            component={Link}
            to="/"
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
            variant="h1"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              ...styles.link,
              ...styles.headerTitle,
            }}
            component={Link}
            to="/"
          >
            InTents
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ...styles.linksContainer,
            }}
          >
            <Button to="/products" component={NavLink} sx={styles.link}>
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
                sx={styles.link}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <Badge
                badgeContent={badgeCount()}
                color="secondary"
                component={Link}
                sx={styles.link}
                to={"/cart"}
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
