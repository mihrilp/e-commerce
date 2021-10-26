import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Your password must be at least 7 characters.")
    .required("Required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match."
  ),
});

export default SignUpSchema;
