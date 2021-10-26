import { useFormik } from "formik";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
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
          {errors.email && touched.email && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{errors.email}</AlertTitle>
            </Alert>
          )}
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
          {errors.password && touched.password && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{errors.password}</AlertTitle>
            </Alert>
          )}
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
