import React from "react";
import { Products, Contact, Login, SignUp } from "../pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Flex, Box } from "@chakra-ui/layout";

function Navbar(props) {
  return (
    <Box p="3">
      <Router>
        <Flex>
          <Box>
            <NavLink to="/">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Box>
          <Box>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
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
