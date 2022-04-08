import React, { useState } from "react";
import { Typography, Button, Divider, Modal, Box } from "@mui/material";
import {
  modalStyle,
  bodyStyle,
  headerStyle,
  footerStyle,
  continueButtonStyle,
} from "./OrderConfirmationModalStyles";

function OrderConfirmationModal({ handleModalClose, openModal }) {
  return (
    <div>
      <Modal open={openModal} onClose={handleModalClose}>
        <Box sx={modalStyle}>
          <Box sx={headerStyle}>
            <Typography variant="h4" component="h2">
              Purchase Successful
            </Typography>
            <Divider>Thank you for your order!</Divider>
          </Box>
          <Box sx={bodyStyle}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Order Number:
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Shipping Address:
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Order Total
            </Typography>
          </Box>
          <Box sx={footerStyle}>
            <Button variant="contained" sx={continueButtonStyle}>
              Continue Shopping
            </Button>
            {/* Easter Egg */}
            <Typography>Happy Trails...</Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderConfirmationModal;
