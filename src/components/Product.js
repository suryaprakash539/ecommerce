import React from "react";

const Product = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        style={{ height: "200px" }}
        className="card-img-top img-responsive"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
