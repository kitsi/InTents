import { Box, Drawer, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function SideDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <Box onClick={toggleDrawer}>
        <Link to="/">
          <Typography>Link 1</Typography>
        </Link>
        <Link to="/">
          <Typography>Link 2</Typography>
        </Link>
      </Box>
    </Drawer>
  );
}
