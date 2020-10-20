import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";

function Navbar() {
  return (
    <Nav
      className="d-flex justify-content-around align-items-center"
      style={{ background: "#40407a" }}
    >
      <Link to="/" className="" style={{ fontSize: "27px", color: "#fff" }}>
        Bloogy
      </Link>

      <SignedoutLinks />
      <SignedinLinks />
    </Nav>
  );
}

export default Navbar;
