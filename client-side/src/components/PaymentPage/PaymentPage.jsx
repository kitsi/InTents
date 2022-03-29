import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddressForm from "./AddressForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentForm from "./PaymentForm";
import React from "react";
import Typography from "@mui/material/Typography";
import * as yup from "yup";

function PaymentPage() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
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
