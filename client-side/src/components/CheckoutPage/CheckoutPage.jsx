import * as yup from "yup";

import React, { useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddressForm from "./forms/AddressForm";
import PaymentForm from "./forms/PaymentForm";

import { useMediaQuery } from "@mui/material";

function CheckoutPage() {
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const [expandedAddress, setExpandedAddress] = useState(true);
  const [expandedPayment, setExpandedPayment] = useState(false);

  const handleAccordionChange = (panel) => (isExpanded) => {
    if (panel == "address") {
      setExpandedAddress(!expandedAddress);
    } else if (panel == "payment") {
      setExpandedPayment(!expandedPayment);
    }
  };

  const openPaymentAccordion = () => {
    setPaymentDisabled(false);
    setExpandedPayment(true);
    setExpandedAddress(false);
  };

  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <>
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
