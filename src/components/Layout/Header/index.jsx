import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { RiUserLine } from "react-icons/ri";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import './style.css'
import axios from "axios";

const Header = ({registerLogin=true, className}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
          let token = localStorage.getItem('token');
          if (token) {
            setIsLoggedIn(true);
          }
          
          if(currentPath.includes('/dashboard')){
            console.log(currentPath);
            
          }
      },[])

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log('token', token);
      
      const baseURL = `${import.meta.env.VITE_BASE_URL}`;
      const response = await axios.post(`${baseURL}/logout`,{}, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      );
      console.log('Logged Out:', response.data);
      localStorage.removeItem('token')
      toast.success(response.data.message)
    }

    catch(error) {
      console.error('Error:', error);
    }


    // fetch(`https://custom.mystagingserver.site/Tim-WDLLC/public/api/logout`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${LogoutData}`
    //     },
    //   },
    // )
      // .then((response) => {
      //   return response.json()
      // })
      // .then((data) => {
      //   console.log(data)
      //   localStorage.removeItem('login');
      //   navigate('/');
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
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

          {registerLogin && (
            isLoggedIn ? (
  
              // <Link to={"/dashboard"} className="btn btn-primary text-light border-0">
              //   <RiUserLine className="me-2" /> Dashboard
              // </Link>
              <Dropdown>
                <Dropdown.Toggle  className="notButton toggleButton">
                <div className="userImage">
                  {userData?.name ? (
                    <span>{userData?.name}</span>

                  ) : ( 
                  <>
                  <span>Name</span>
                  </> 
                )}
                </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="userMenu" align="end">
                  {!currentPath.includes('/dashboard') && 
                  <Link className="userMenuItem" to={'/dashboard'}>
                    <FaUser size={16}/>{" "}
                    Dashboard
                  </Link>
                  }
                  <Link to="#" className="userMenuItem" onClick={handleLogout} >
                    <FaSignOutAlt/>{" "}
                    Logout
                  </Link>
                </Dropdown.Menu>

              </Dropdown>
            ) 
            : (
              <Link to={"/login"} className="btn-login-signup">
                <RiUserLine className="me-2" /> Login/Sign Up
              </Link>
            )
          )
          

          
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
