import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data";

const App = () => {
  const addToCart = (id) => {};

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-8">
            <Products products={data.products} addToCart={addToCart} />
          </div>
          <div className="col-sm-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
