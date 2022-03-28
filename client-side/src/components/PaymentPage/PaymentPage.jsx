import React from "react";

import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PaymentPage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. Shipping Address</Typography>
        </AccordionSummary>
        <AccordionDetails>{<AddressForm />}</AccordionDetails>
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
    </div>
  );
}

export default PaymentPage;
