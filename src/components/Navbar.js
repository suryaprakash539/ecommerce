import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info border border-primary rounded">
      <a className="navbar-brand" href="#">
        Shopping Cart
      </a>
      <ul className="nav nav-bar navbar-dark ml-auto">
        <li className="text-light">
          Cart <span className="badge badge-danger">{0}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
