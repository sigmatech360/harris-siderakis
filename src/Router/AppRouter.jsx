import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import VirtualPILegit from "../screens/VirtualPILegit";
import Reviews from "../screens/Reviews";

// Import your components/pages

const AppRouter = () => {
  return (
    <Router basename="/harris-siderakis">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-my-virtual-PI" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/is-my-virtual-pi-legit" element={<VirtualPILegit />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
