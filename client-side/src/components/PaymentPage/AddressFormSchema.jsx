import React from "react";
import * as yup from "yup";

function AddressFormSchema() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    address: yup
      .string()
      .required("Address is required")
      .oneOf([yup.ref("address"), null], "Address is required"),
    address2: yup
      .string()
      .oneOf([yup.ref("address2"), null], "Address is required"),
    city: yup
      .string()
      .required("City is required")
      .oneOf([yup.ref("city"), null], "City is required"),
    state: yup
      .string()
      .required("State is required")
      .oneOf([yup.ref("state"), null], "State is required"),
    zip: yup
      .string()
      .required("Zip is required")
      .oneOf([yup.ref("zip"), null], "Zip is required"),
  });

  return schema;
}

export default AddressFormSchema;
