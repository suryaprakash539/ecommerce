import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
