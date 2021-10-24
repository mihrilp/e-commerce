import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import Product from "../components/Product";

function Products(props) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid>
  );
}

export default Products;
