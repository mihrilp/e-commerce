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
  Box,
} from "@chakra-ui/react";

import SignUpSchema from "./SignUpSchema";

function SignUp(props) {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: SignUpSchema,
      onSubmit: (values) => console.log(values),
    });
  return (
    <Box p={10}>
      {" "}
      <Flex direction="column" justify="center" align="center">
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              backgroundColor="white"
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
              backgroundColor="white"
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
          <FormControl id="passwordConfirm" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              backgroundColor="white"
              placeholder="confirm password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}
              isInvalid={touched.passwordConfirm && errors.passwordConfirm}
              mb="5"
              width="400px"
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>{errors.passwordConfirm}</AlertTitle>
              </Alert>
            )}
          </FormControl>
          <Button
            mt={4}
            colorScheme="yellow"
            type="submit"
            width="400px"
            onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </Flex>
    </Box>
  );
}

export default SignUp;
