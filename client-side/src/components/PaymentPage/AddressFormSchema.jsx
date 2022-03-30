import * as yup from "yup";

function AddressFormSchema() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    address: yup.string().required("Address is required"),
    address2: yup.string(),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup.string().required("Zip is required"),
  });

  return schema;
}

export default AddressFormSchema;
