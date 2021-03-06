import React from "react";
import Product from "./Product";

const Products = ({ products, addToCart }) => {
  return (
    <div className="container-fluid ">
      <div className="row no-glutters ">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
