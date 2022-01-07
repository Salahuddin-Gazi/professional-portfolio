import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import PortfolioDescription from "../porfolio/PortfolioDescription";

const AppRoute = () => {
  return (
    <section className="container py-2" style={{ marginTop: "2vh" }}>
      <Routes>
        <Route index path="/professional-portfolio" element={<Home />} />
        <Route exact path="/professional-portfolio/about" element={<About />} />
        <Route exact path="/professional-portfolio/portfolio" element={<Portfolio />} />
        <Route exact path="/professional-portfolio/portfolio/:id" element={<PortfolioDescription />} />
        <Route path="/professional-portfolio/*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default AppRoute;
