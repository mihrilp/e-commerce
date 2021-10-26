import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Heading, Button, Icon, Text } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Profile from "../icons/Profile";

function Navbar(props) {
  return (
    <Box p="5" my={5}>
      <Flex mb="5" justify="space-around" align="center">
        <Box>
          <Flex align="center">
            <NavLink to="/">
              <Heading as="h1" size="lg">
                LOGO
              </Heading>
            </NavLink>
          </Flex>
        </Box>
        <Box width="400px">
          <Flex justify="space-between" align="center">
            <NavLink to="/">
              <Text fontSize="lg">Women</Text>
            </NavLink>
            <NavLink to="/">
              <Text fontSize="lg">Men</Text>
            </NavLink>
            <NavLink to="/">
              <Text fontSize="lg">Children</Text>
            </NavLink>
            <NavLink to="/">
              <Text fontSize="lg">Shoes</Text>
            </NavLink>
            <NavLink to="/">
              <Text fontSize="lg">Accessory</Text>
            </NavLink>
          </Flex>
        </Box>
        <Box>
          <Flex justify="space-between" align="center">
            <NavLink to="/login">
              <Button mr={5} variant="link" colorScheme="black">
                <Icon as={Profile} w={7} h={7} />
                Login
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button leftIcon={<EmailIcon />} colorScheme="yellow">
                Sign Up
              </Button>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
