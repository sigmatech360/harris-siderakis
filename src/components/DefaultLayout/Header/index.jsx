import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { RiUserLine } from "react-icons/ri";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="My Virtual PI" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link as={Link} to="/about-my-virtual-PI">
              About My Virtual PI
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/is-my-virtual-pi-legit">
              Is My Virtual PI Legit?
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              Reviews
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/about-my-virtual-PI"
              className={currentPath === "/about-my-virtual-PI" ? "active" : ""}
            >
              About My Virtual PI
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/pricing"
              className={currentPath === "/pricing" ? "active" : ""}
            >
              Pricing
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/is-my-virtual-pi-legit"
              className={
                currentPath === "/is-my-virtual-pi-legit" ? "active" : ""
              }
            >
              Is My Virtual PI Legit?
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/reviews"
              className={currentPath === "/reviews" ? "active" : ""}
            >
              Reviews
            </Nav.Link>
          </Nav>

          <Link to={"/login"} className="btn-login-signup">
            <RiUserLine className="me-2" /> Login/Sign Up
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
