import * as yup from "yup";
const addressFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  addressLineOne: yup.string().required("Address is required"),
  addressLineTwo: yup.string(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().required("Zip is required"),
});

export default addressFormSchema;
