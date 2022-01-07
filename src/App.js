import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// add route
import AppRoutesMains from "./components/routing/AppRoutesMains";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutesMains />} />
      </Routes>
    </Router>
  );
};

export default App;
