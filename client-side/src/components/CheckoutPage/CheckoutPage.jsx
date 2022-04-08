import React, { useState } from "react";
import * as yup from "yup";
import OrderSummary from "./OrderSummary/OrderSummary";
import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import OrderConfirmationModal from "./OrderConfirmationModal/OrderConfirmationModal";

import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CheckoutPage() {
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const [expandedAddress, setExpandedAddress] = useState(true);
  const [expandedPayment, setExpandedPayment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleAccordionChange = (panel) => (isExpanded) => {
    if (panel == "address") {
      setExpandedAddress(!expandedAddress);
    } else if (panel == "payment") {
      setExpandedPayment(!expandedPayment);
    }
  };

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const openPaymentAccordion = () => {
    setPaymentDisabled(false);
    setExpandedPayment(true);
    setExpandedAddress(false);
  };

  const isDesktop = useMediaQuery("(min-width:900px)");

  const styles = {
    largeIcon: {
      width: "2.5rem",
      height: "2.5rem",
    },
  };

  return (
    <>
      <OrderConfirmationModal
        handleModalClose={handleModalClose}
        openModal={openModal}
      />
      {/* Desktop View */}
      {isDesktop ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "70vw",
              margin: "1rem",
            }}
          >
            <Accordion
              expanded={expandedAddress}
              onChange={handleAccordionChange("address")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={styles.largeIcon} />}
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
                expandIcon={<ExpandMoreIcon style={styles.largeIcon} />}
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
      ) : (
        // Mobile View
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100vw",
              margin: "1rem",
            }}
          >
            <OrderSummary />
            <Accordion
              expanded={expandedAddress}
              onChange={handleAccordionChange("address")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>1. Shipping Address</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AddressForm openPaymentAccordion={openPaymentAccordion} />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expandedPayment}
              onChange={handleAccordionChange("payment")}
              disabled={paymentDisabled}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>2. Payment Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PaymentForm />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CheckoutPage;
