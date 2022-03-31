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
  const [shippingInfo, setShippingInfo] = new useState({
    firstName: "",
    lastName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = () => {
    console.log("submit");
    // handle form submission
    addressFormSchema.isValid(shippingInfo).then((valid) => {
      // if valid == true post form to api lead to purchase complete page.
      if (valid) {
        console.log("Valid Address");
      } else {
        console.log("Invalid Address");
      }
    });
  };

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
            {
              <AddressForm
                shippingInfo={shippingInfo}
                setShippingInfo={setShippingInfo}
              />
            }
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
      <Button variant="contained" onClick={() => handleSubmit()}>
        Place an Order
      </Button>
    </Box>
  );
}

export default PaymentPage;
