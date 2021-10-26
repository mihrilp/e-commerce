import { ErrorMessage, useFormik } from "formik";
import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Alert,
} from "@chakra-ui/react";

import LoginSchema from "./LoginSchema";

function Login(props) {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: (values) => console.log(values),
    });
  return (
    <Flex direction="column" justify="center" align="center">
      <Box my={5}>
        {errors.general && <Alert status="error">{errors.general}</Alert>}
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            variant="filled"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            isInvalid={touched.email && errors.email}
            mb="5"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            variant="filled"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            isInvalid={touched.password && errors.password}
            mb="5"
            width="400px"
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          width="400px"
          onSubmit={handleSubmit}
        >
          Login
        </Button>
      </form>
    </Flex>
  );
}

export default Login;
