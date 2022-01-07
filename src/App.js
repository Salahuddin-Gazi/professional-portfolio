import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import componenets
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./components/routing/AppRoutes";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
