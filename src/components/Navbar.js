import React from "react";
import { Products, Contact, Login, SignUp } from "../pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Flex, Box, Spacer, Heading, Button } from "@chakra-ui/react";
import { EmailIcon, SmallAddIcon } from "@chakra-ui/icons";

function Navbar(props) {
  return (
    <Box p="3">
      <Router>
        <Flex mb="5">
          <Box>
            <NavLink to="/">
              <Heading as="h2" size="lg">
                Products
              </Heading>
            </NavLink>
            <NavLink to="/contact">
              <Heading as="h2" size="lg">
                Contact
              </Heading>
            </NavLink>
          </Box>
          <Spacer />
          <Box>
            <NavLink to="/login">
              <Button mr="2" leftIcon={<EmailIcon />} colorScheme="blue">
                Login
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button leftIcon={<SmallAddIcon />} colorScheme="blue">
                Sign Up
              </Button>
            </NavLink>
          </Box>
        </Flex>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </Box>
  );
}

export default Navbar;
