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
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./NavBarStyles";
import { clearToken } from "../AdminPage/AdminLogin/adminSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
// Add pages from wireframe
const pages = ["Tents", "Cookware", "Sleeping Bags", "Fans", "Emergency"];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const badgeCount = () => {
    let count = 0;
    cartItems.map((item) => (count += item.quantity));
    return count;
  };

  const logout = () => {
    dispatch(clearToken());
    return navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ height: "50%" }}>
      <SideDrawer
        isOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        pages={pages}
      />
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
            <Button to="/products" end component={NavLink} sx={styles.link}>
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
            {token ? (
              <Button
                size="large"
                sx={{ backgroundColor: "primary.dark" }}
                variant="contained"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <IconButton aria-label="cart">
                <Badge
                  badgeContent={badgeCount()}
                  color="secondary"
                  component={Link}
                  sx={styles.cart}
                  to={"/cart"}
                >
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      <SearchBar />
    </AppBar>
  );
};
export default NavBar;
