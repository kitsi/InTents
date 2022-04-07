import * as yup from "yup";

import React, { useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddressForm from "./forms/AddressForm";
import PaymentForm from "./forms/PaymentForm";

function CheckoutPage() {
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "60vw",
          margin: "1rem",
        }}
      >
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>1. Shipping Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddressForm setPaymentDisabled={setPaymentDisabled} />
          </AccordionDetails>
        </Accordion>
        <Accordion disabled={paymentDisabled}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>2. Payment Information</Typography>
          </AccordionSummary>
          <AccordionDetails>{<PaymentForm />}</AccordionDetails>
        </Accordion>
      </Box>
      <OrderSummary />
    </Box>
  );
}

export default CheckoutPage;
