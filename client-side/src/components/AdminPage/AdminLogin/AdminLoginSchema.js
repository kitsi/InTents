import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

const adminLoginSchema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().password().required("Please enter your password"),
});

export default adminLoginSchema;
