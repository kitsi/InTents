import * as yup from "yup";

import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddressForm from "./AddressForm";
import addressFormSchema from "./AddressFormSchema";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentForm from "./PaymentForm";
import Typography from "@mui/material/Typography";

function PaymentPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>1. Shipping Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddressForm />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
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
