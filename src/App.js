import React from "react";

import Shelf from "../src/components/shelf";
import Filter from "../src/components/shelf/filter";
import FloatCart from "../src/components/floatCart";

const App = () => (
  <React.Fragment>
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);  

export default App;
