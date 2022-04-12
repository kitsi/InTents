import React, { useRef } from "react";
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
import { useDispatch } from "react-redux";
import { clearCart } from "../../CartPage/cartSlice";

function OrderConfirmationModal(props) {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const {
    handleModalClose,
    openModal,
    orderNumber,
    shippingAddress,
    orderTotal,
    pageRef,
  } = props;

  // not important, fun easter egg
  const rotatePage = () => {
    const animationTime = 1250;
    pageRef.current.style.transition = `transform ${animationTime}ms`;
    pageRef.current.style.transform = "rotate(360deg)";
    modalRef.current.style.transition = `transform ${animationTime}ms`;
    modalRef.current.style.transform = "rotate(360deg)  translate(-50%, -50%)";
    modalRef.current.style.transformOrigin = "top left";
    setTimeout(() => {
      pageRef.current.style.transform = "rotate(0deg)";
      modalRef.current.style.transform = "rotate(0deg) translate(-50%, -50%)";
    }, animationTime);
  };

  return (
    <div>
      <Modal open={openModal} onClose={handleModalClose}>
        <Box sx={modalStyle} ref={modalRef}>
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
              {shippingAddress.addressLineTwo !== ""
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
              onClick={() => dispatch(clearCart())}
            >
              Continue Shopping
            </Button>
            {/* Easter Egg */}
            <Typography onClick={rotatePage}>Happy Trails...</Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderConfirmationModal;
