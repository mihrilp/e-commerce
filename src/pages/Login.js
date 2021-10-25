import { useFormik } from "formik";
import { Box, Text } from "@chakra-ui/react";

function Login(props) {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <Box>
      <Text as="h2">Login</Text>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <button type="submit">Login </button>
      </form>
    </Box>
  );
}

export default Login;
