import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import data from "./data";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Products products={data.products} />
    </div>
  );
};

export default App;
