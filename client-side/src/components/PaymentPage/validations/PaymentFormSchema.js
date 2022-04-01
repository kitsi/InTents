import * as yup from "yup";

function PaymentFormSchema() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    cardNumber: yup.string().max(16).required("Card number is required"),
    expirationCheck: yup.string().required("Expiration is required"),
    cvcCheck: yup.string().required("CVC is required"),
  });

  return schema;
}

export default PaymentFormSchema;
