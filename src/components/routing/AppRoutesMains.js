import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import PortfolioDescription from "../porfolio/PortfolioDescription";

const AppRoute = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="container py-2" style={{ marginTop: "2vh" }}>
        <Routes>
          <Route index path="" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<PortfolioDescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </Fragment>
  );
};

export default AppRoute;
