import React, { useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import OrderConfirmationModal from "./OrderConfirmationModal/OrderConfirmationModal";
import { useSelector } from "react-redux";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as styles from "./CheckoutPageStyles";

function CheckoutPage() {
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const [expandedAddress, setExpandedAddress] = useState(true);
  const [expandedPayment, setExpandedPayment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleAccordionChange = (panel) => (isExpanded) => {
    if (panel === "address") {
      setExpandedAddress(!expandedAddress);
    } else if (panel === "payment") {
      setExpandedPayment(!expandedPayment);
    }
  };

  // use select to be replaced with data from backend after post request is made
  const { orderTotal, formData } = useSelector((state) => state.checkout);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const openPaymentAccordion = () => {
    setPaymentDisabled(false);
    setExpandedPayment(true);
    setExpandedAddress(false);
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <OrderConfirmationModal
        handleModalClose={handleModalClose}
        openModal={openModal}
        orderTotal={orderTotal}
        shippingAddress={formData.addressFormData}
        orderNumber={1}
      />
      <Box sx={styles.desktopContentContainer}>
        <Box sx={styles.desktopAccordionContainer}>
          <Accordion
            expanded={expandedAddress}
            onChange={handleAccordionChange("address")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={styles.expandIcon} />}
            >
              <Typography>1. Shipping Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AddressForm openPaymentAccordion={openPaymentAccordion} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded={false}
            expanded={expandedPayment}
            onChange={handleAccordionChange("payment")}
            disabled={paymentDisabled}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={styles.expandIcon} />}
            >
              <Typography>2. Payment Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PaymentForm handleModalOpen={handleModalOpen} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <OrderSummary />
      </Box>
    </Box>
  );
}

export default CheckoutPage;
