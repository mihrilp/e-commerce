import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Product = ({ imageUrl, title, price }) => {
  return (
    <Box boxSize="sm">
      <Image
        boxSize="200px"
        objectFit="cover"
        src={imageUrl}
        alt="Segun Adebayo"
      />
    </Box>
  );
};

export default Product;
