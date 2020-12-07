import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((product) => product.id === item.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === exists.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeCart = (item) => {
    const exists = cartItems.find((product) => product.id === item.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((product) => product.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...exists, quantity: exists.quantity - 1 }
            : product
        )
      );
    }
  };

  const onCheckOut = () => {
    alert("Thanks for Shopping");
    setCartItems([]);
  };

  return (
    <div className="container-fluid">
      <Navbar cartItemsLength={cartItems.length} />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-8">
            <Products
              products={data.products}
              addToCart={addToCart}
              removeCart={removeCart}
            />
          </div>
          <div className="col-sm-4">
            <Cart
              cartItems={cartItems}
              removeCart={removeCart}
              onCheckOut={onCheckOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
