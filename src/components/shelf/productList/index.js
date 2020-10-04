import React from "react";

import Product from "./product";

const ProductList = ({ products }) => {
  return (
    products &&
    products.map((p) => {
      return <Product product={p} key={p.id} />;
    })
  );
};

export default ProductList;
