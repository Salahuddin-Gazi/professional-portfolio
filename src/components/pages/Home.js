import React from "react";
import avatar from "../avatar/gaziSalahuddin.jpg";
import django from "../logos/django.svg";
import python from "../logos/python.svg";
import react from "../logos/react.svg";
import express from "../logos/express.png";
import mongodb from "../logos/mongodb__icon.svg";
import js from "../logos/js.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row mb-5">
      <div className="col col-12 col-md-6 mb-3">
        <div className="card-body cardName text-center">
          <h1 className="card-subtitle text-muted mb-1">
            <span className="d-block px-5">Gazi Salahuddin</span>
          </h1>
          <h4 className="text-primary">MERN Stack Developer</h4>
          <div className="iconDiv">
            <a href="https://github.com/Salahuddin-Gazi" target={`_blank`}>
              <i className="fab fa-2x fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sa1ahudd1n/" target={`_blank`}>
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="card-body cardBox">
          <span className="d-block">
            <strong>
              <i className="fas fa-info-circle"></i> Status:
            </strong>{" "}
            Freelancing
          </span>
          <span className="d-block">
            <strong>
              <i className="far fa-compass"></i> Working on:
            </strong>{" "}
            Fiverr
          </span>
        </div>
        <Link to="about" className="text-decoration-none">
          <div className="aboutMeDiv">
            <button className="btn aboutButton">
              ABOUT ME
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </Link>
      </div>
      <div className="col col-12 col-md-6 imageContainer">
        <div className="card-body avatarDiv">
          <img src={avatar} alt="Profile" className="card-img avatar" />
          <img src={js} alt="Profile" className="logo js" />
          <img src={mongodb} alt="Profile" className="logo mongodb" />
          <img src={express} alt="Profile" className="logo express" />
          <img src={react} alt="Profile" className="logo react" />
          <img src={python} alt="Profile" className="logo python" />
          <img src={django} alt="Profile" className="logo django" />
        </div>
      </div>
    </div>
  );
};

export default Home;
