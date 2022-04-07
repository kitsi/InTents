import * as yup from "yup";

const PaymentFormSchema = yup.object().shape({
  nameOnCard: yup.string().required("Name on card is required"),
  cardNumber: yup.string().max(16).required("Card number is required"),
  expiration: yup.string().required("Card expiration is required"),
  cvc: yup.string().required("CVC is required"),
});

export default PaymentFormSchema;
