import * as yup from "yup";

import React, { useState } from "react";

import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddressForm from "./forms/AddressForm";
import PaymentForm from "./forms/PaymentForm";

function PaymentPage() {
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
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
      <Button variant="contained">Place an Order</Button>
    </Box>
  );
}

export default PaymentPage;
