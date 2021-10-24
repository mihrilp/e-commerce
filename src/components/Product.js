import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Product = () => {
  return (
    <Box boxSize="sm">
      <Image
        boxSize="200px"
        objectFit="cover"
        src="https://source.unsplash.com/random"
        alt="Segun Adebayo"
      />
    </Box>
  );
};

export default Product;
