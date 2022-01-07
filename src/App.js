import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

// import componenets
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import AppRoutes from "./components/routing/AppRoutes";
import AppRoutesMains from "./components/routing/AppRoutesMains";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutesMains />} />
        <Route path="/professional-portfolio/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
