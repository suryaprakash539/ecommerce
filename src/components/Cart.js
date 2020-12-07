import React from "react";

const Cart = ({ cartItems, removeCart, onCheckOut }) => {
  const totalPrice = cartItems.reduce(function (total, item) {
    return total + item.quantity * item.price;
  }, 0);

  if (cartItems.length > 0) {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid border border-success rounded">
          <h3 className="ml-2">Cart Items</h3>
          <hr />
          <div className="d-flex flex-column ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <p className="ml-2">{item.name}</p>
                <button
                  className="btn btn-danger align-center ml-2"
                  onClick={() => removeCart(item)}
                >
                  -
                </button>
                <p className="mr-2">
                  {item.quantity} X {item.price} = {item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="ml-2">Total Price </p>
            <p className="mr-2">$ {totalPrice}</p>
          </div>
          <button
            className="mt-2 ml-2 p-2 border border-info rounded"
            onClick={() => onCheckOut()}
          >
            checkout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="jumbotron jumbotron-fluid border border-success rounded">
        <h3 className="text-center">Cart is Empty</h3>
      </div>
    );
  }
};

export default Cart;
