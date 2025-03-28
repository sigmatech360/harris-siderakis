import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";

// Import your components/pages


const AppRouter = () => {
  return (
    <Router basename="/harris-siderakis">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;