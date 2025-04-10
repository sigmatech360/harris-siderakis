import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import VirtualPILegit from "../screens/VirtualPILegit";
import Reviews from "../screens/Reviews";
import Register from "../screens/Register";
import Login from "../screens/Login";

const AppRouter = () => {
  return (
    <Router basename="/harris-siderakis">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-my-virtual-PI" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/is-my-virtual-pi-legit" element={<VirtualPILegit />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
