import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemAlreadyPresent = cartItems.find(
      (product) => product.id === item.id
    )
      ? true
      : false;

    if (itemAlreadyPresent) {
      alert("item already added to cart");
    } else {
      item.quantity = item.quantity + 1;
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <div className="container-fluid">
      <Navbar cartItemsLength={cartItems.length} />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-8">
            <Products products={data.products} addToCart={addToCart} />
          </div>
          <div className="col-sm-4">
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
