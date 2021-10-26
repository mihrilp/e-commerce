import { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import Product from "../../components/Product/index";

import axios from "axios";

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://617571ee08834f0017c70c08.mockapi.io/products")
      .then((response) => setProducts(response.data));
  }, []);

  console.log(products);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {products.map((product, key) => (
        <Product key={key} imageUrl={product.avatar} title={product.name} />
      ))}
    </Grid>
  );
}

export default Products;
