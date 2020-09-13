import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3 className="mt-2 ml-2">
        <Link className="router-link" to="/">
          Home
        </Link>
      </h3>
    </nav>
  );
};

export default Navbar;
