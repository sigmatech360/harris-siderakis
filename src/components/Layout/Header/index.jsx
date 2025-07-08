import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { RiUserLine } from "react-icons/ri";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import "./style.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "../../../store";
import { setLogout } from "../../../store/slices/user";
import { FiAirplay } from "react-icons/fi";

const Header = ({ registerLogin = true, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const { isAuthenticated, user } = useSelector(({ user }) => user);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    if (currentPath.includes("/dashboard")) {
      console.log(currentPath);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      // console.log('token', token);

      const baseURL = `${import.meta.env.VITE_BASE_URL}`;
      const response = await axios.post(
        `${baseURL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Logged Out:", response.data);
      dispatch(setLogout());
      localStorage.removeItem("token");
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Navbar expand="lg" className={`main-navbar ${className}`} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="My Virtual PI" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
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

          {registerLogin &&
            (isAuthenticated ? (
              <>
                <Nav>
                  <Nav.Link
                    as={Link}
                    to="/search"
                    className={currentPath === "/search" ? "active" : ""}
                  >
                    Start Searching
                  </Nav.Link>
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle
                    className={`notButton ${
                      user?.image ? "p-2 bg-transparent" : ""
                    } toggleButton`}
                  >
                    {user?.image !== null ? (
                      <div className="userImage">
                        <img
                          src={`${import.meta.env.VITE_BASE_IMAGE_URL}/${
                            user?.image
                          }`}
                          alt="user-image"
                          className="img-fluid user-avtar"
                        />
                      </div>
                    ) : (
                      <span className=" user-name text-capitalize">
                        {user?.name.slice(0, 1)}
                      </span>
                    )}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="userMenu" align="end">
                    {!currentPath.includes("/dashboard") && (
                      <Link className="userMenuItem" to={"/dashboard/profile"}>
                        <FiAirplay size={16} className="me-2" /> Dashboard
                      </Link>
                    )}

                    <div className="menuDivider">
                      <span></span>
                    </div>
                    <Link
                      to="#"
                      className="userMenuItem"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="me-2" /> Logout
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Link to={"/login"} className="btn-login-signup">
                <RiUserLine className="me-2" /> Login/Sign Up
              </Link>
            ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
