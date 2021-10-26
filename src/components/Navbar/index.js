import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Heading, Button, Icon } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Profile from "../icons/Profile";

function Navbar(props) {
  return (
    <Box p="5" my={5}>
      <Flex mb="5" justify="space-between" align="center">
        <Box>
          <NavLink to="/">
            <Heading as="h1" size="lg">
              LOGO
            </Heading>
          </NavLink>
        </Box>
        <Box>
          <Flex justify="space-around" align="center">
            <NavLink to="/">
              <Heading as="h2" size="md">
                Women
              </Heading>
            </NavLink>
            <NavLink to="/">
              <Heading as="h2" size="md">
                Men
              </Heading>
            </NavLink>
            <NavLink to="/">
              <Heading as="h2" size="md">
                Children
              </Heading>
            </NavLink>
            <NavLink to="/">
              <Heading as="h2" size="md">
                Shoes
              </Heading>
            </NavLink>
          </Flex>
        </Box>
        <Box>
          <NavLink to="/login">
            <Button mr="2" variant="link" colorScheme="blue">
              <Icon as={Profile} w={7} h={7} />
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button leftIcon={<EmailIcon />} colorScheme="blue">
              Sign Up
            </Button>
          </NavLink>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
