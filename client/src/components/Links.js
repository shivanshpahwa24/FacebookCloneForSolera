import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      {" "}
      <Link className="nav-link router-link">Home</Link>
      <hr
        style={{ borderTop: "1px solid rgb(85, 85, 85)" }}
        className="w-100 mt-0 mb-2"
      />
      <Link className="nav-link router-link">About Us</Link>
      <hr
        style={{ borderTop: "1px solid rgb(85, 85, 85)" }}
        className="w-100 mt-0 mb-2"
      />
      <Link className="nav-link router-link">Privacy</Link>
      <hr
        style={{ borderTop: "1px solid rgb(85, 85, 85)" }}
        className="w-100 mt-0 mb-2"
      />
      <Link className="nav-link router-link">Contact Us</Link>
      <hr
        style={{ borderTop: "1px solid rgb(85, 85, 85)" }}
        className="w-100 mt-0 mb-2"
      />
      <Link className="nav-link router-link">Copyrights 2020</Link>
      <hr
        style={{ borderTop: "1px solid rgb(85, 85, 85)" }}
        className="w-100 mt-0 mb-2"
      />
    </div>
  );
};

export default Links;
