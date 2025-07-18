import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import VirtualPILegit from "../screens/VirtualPILegit";
import Reviews from "../screens/Reviews";
import Register from "../screens/Auth/Register";
import Login from "../screens/Auth/Login";
import Dashboard from "../screens/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import EditProfile from "../screens/Dashboard/Profile/editProfile";
import Profile from "../screens/Dashboard/Profile";
import Search from "../screens/Search";
import OrderHistory from "../screens/Dashboard/OrderHistory";

const AppRouter = () => {
  return (
    <Router basename="/harris-siderakis">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-my-virtual-PI" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/is-my-virtual-pi-legit" element={<VirtualPILegit />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/search" element={<ProtectedRoutes Components={Search} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/dashboard" element={<ProtectedRoutes Components={Dashboard} />} >
        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/profile/editProfile" element={<ProtectedRoutes Components={EditProfile} />} />
        </Route> */}
        {/* <Route
          path="/dashboard"
          // element={<ProtectedRoutes Components={Dashboard} />}
        >
        </Route> */}
          <Route
            path="/profile"
            element={<ProtectedRoutes Components={Profile} />}
          />
          <Route
            path="/order-history"
            element={<ProtectedRoutes Components={OrderHistory} />}
          />
          <Route
            path="editProfile"
            element={<ProtectedRoutes Components={EditProfile} />}
          />
      </Routes>
    </Router>
  );
};

export default AppRouter;
