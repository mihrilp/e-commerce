import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Your password must be at least 7 characters.")
    .required("Required"),
});

export default LoginSchema;
