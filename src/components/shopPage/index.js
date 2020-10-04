import React from "react";
import Shelf from "../shelf";
import Filter from "../shelf/filter";
import FloatCart from "../floatCart";

const ShopPage = () => (
  <React.Fragment>
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default ShopPage;
