import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 35) {
        navbar.classList.add("bg-light");
      } else {
        navbar.classList.remove("bg-light");
      }
    });
  }, []);
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bolder fs-2 text-primary">G</span>
          <span className="fw-bold text-uppercase">azi</span>
          <span className="fw-bolder fs-2 text-danger">S</span>
          <span className="fw-bold text-uppercase">alahuddin</span>
        </Link>
        <button
          className="navbar-toggler hamburgerButton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-hamburger"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link homeLink" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link aboutLink" to="/about">
                <i className="fas fa-user-astronaut"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link portfolioLink" to="/portfolio">
                <i className="fas fa-briefcase"></i> Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
