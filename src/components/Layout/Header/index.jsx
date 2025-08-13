import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { RiUserLine } from "react-icons/ri";
import { FaBell, FaCheck, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./style.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "../../../store";
import { setLogout } from "../../../store/slices/user";
import { FiAirplay } from "react-icons/fi";
import { useNotifications } from "../../../context/NotificationContext";

const Header = ({ registerLogin = true, className }) => {
  const { notifications, updateNotifications, totalUnreadNotifications,setTotalUnreadNNotifications } = useNotifications();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [notifications, setNotifications] = useState([]);
  // const [totalUnreadNotifications, setTotalUnreadNNotifications] = useState(0);
  const [userData, setUserData] = useState({});
  const { isAuthenticated, user } = useSelector(({ user }) => user);
  // const fetchNotifications = async () => {
  //   try {
  //     const baseURL = `${import.meta.env.VITE_BASE_URL}`;
  //     const token = localStorage.getItem("token");
      
  //     const response = await axios.get(
  //       `${baseURL}/notifications`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const data = response.data;
  //     if (data.status) {
  //       updateNotifications(data?.data)
  //       console.log('notifications', data?.data);
  //       let unreadNotifications = 0;
  //       data?.data.forEach((item)=>{
  //         if(!item.read_at){
  //           unreadNotifications += 1;
  //         }
  //       })
  //       // console.log('total unread', unreadNotifications);
  //       setTotalUnreadNNotifications(unreadNotifications);
        
        
  //     }
  //   } catch (error) {
  //     console.error('Error fetching notifications :', error);
      
  //   }
  // };

  const markAllAsRead = async (isOpen) => {
    if(isOpen && totalUnreadNotifications > 0){
      try {
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
        const token = localStorage.getItem("token");
        
        const response = await axios.get(
          `${baseURL}/notifications/mark-all-as-read`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        if (data.status) {
          // setNotifications(data?.data)
          console.log('notifications marked', data.message);
          // let unreadNotifications = 0;
          // data?.data.forEach((item)=>{
          //   if(!item.read_at){
          //     unreadNotifications += 1;
          //   }
          // })
          // console.log('total unread', unreadNotifications);
          setTotalUnreadNNotifications(0);
          
          
        }
      } catch (error) {
        console.error('Error fetching notifications :', error);
        
      }
    
    }
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      updateNotifications();
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
                {/* Notifications */}
                <Dropdown onToggle={markAllAsRead}>
                  <Dropdown.Toggle
                    className={`notButton  toggleButton noAfter bg-transparent`}
                    // onClick={markAllAsRead}
                  >
                    <div className="position-relative">
                      <FaBell size={20} />
                      <span className="notification-count">{totalUnreadNotifications}</span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="notificationMenu" align="end">
                    <div className="notificationList">
                      <p className="notificationTitle mb-2">All Notifications</p>

                      {notifications.map((notification, i) => {
                        return (
                          <>
                            <Link className="notificationItem" to={`/order-history/${notification?.data?.order_id}`}>
                              <span>
                                <FaCheck className="notiBell text-primary" />
                              </span>
                              <div>
                              <p className="fw-bold">{notification?.data?.title}</p>
                              <p className="notiBody">{notification?.data.body}</p>

                              </div>
                            </Link>
                            {i + 1 < notifications.length && (
                              <div className="menuDivider ">
                                <span className="w-100"></span>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                {/* Profile */}
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
                      <Link className="userMenuItem" to={"/profile"}>
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
