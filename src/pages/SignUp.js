import { useFormik } from "formik";
import {
  Flex,
  Text,
  Button,
  Form,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function SignUp(props) {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <Flex direction="column" justify="center" align="center">
      <Text as="h2">Login</Text>
      <Form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel> Name </FormLabel>
          <Input
            onChange={handleChange}
            placeholder="name"
            value={values.email}
          />
        </FormControl>
      </Form>
    </Flex>
  );
}

export default SignUp;
