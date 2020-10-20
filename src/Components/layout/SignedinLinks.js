import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SignedinLinks() {
  return (
    <Nav className="m-4">
      <Nav.Item>
        <NavLink to="/create" className="nav-link" style={{ color: "white" }}>
          New Project
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={{ color: "white" }} to="" className="nav-link">
          Log Out
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={{ color: "white" }} className="nav-link" to="">
          KA
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default SignedinLinks;
