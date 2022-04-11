import React from "react";
import { Typography, Button, Divider, Modal, Box } from "@mui/material";
import {
  modalStyle,
  bodyStyle,
  headerStyle,
  footerStyle,
  continueButtonStyle,
  subHeaderStyle,
} from "./OrderConfirmationModalStyles";
import { Link } from "react-router-dom";
import formatCurrency from "../../../utilities/formatCurrency";

function OrderConfirmationModal(props) {
  const {
    handleModalClose,
    openModal,
    orderNumber,
    shippingAddress,
    orderTotal,
  } = props;

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
            <Typography variant="h6" sx={subHeaderStyle}>
              Order Number
            </Typography>
            <Typography>{orderNumber}</Typography>
            <Typography variant="h6" sx={subHeaderStyle}>
              Shipping Address
            </Typography>
            <Typography>
              {shippingAddress.addressLineOne}, {shippingAddress.city},
              {shippingAddress.addressLineTwo != ""
                ? shippingAddress.addressLineTwo + ","
                : null}{" "}
              {shippingAddress.state}, {shippingAddress.zip}
            </Typography>
            <Typography variant="h6" sx={subHeaderStyle}>
              Order Total
            </Typography>
            <Typography>{formatCurrency(orderTotal)}</Typography>
          </Box>
          <Box sx={footerStyle}>
            <Button
              component={Link}
              to={"/products"}
              variant="contained"
              sx={continueButtonStyle}
            >
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
