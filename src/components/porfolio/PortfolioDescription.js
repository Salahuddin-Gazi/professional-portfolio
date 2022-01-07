import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import "../css/Portfolio.css";
import acropolis2 from "./images/acropolis/acropolis2.png";
import dev2 from "./images/devConnector/dev2.png";

const PortfolioDescription = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const items = [
    {
      id: "acr001",
      name: "Acropolis Shoes",
      image: acropolis2,
      sub: "Fully functional E-commerce application on MERN stack",
      tags: ["Ecommerce", "WebApp"],
      github: "https://github.com/Salahuddin-Gazi/acropolis-shoes",
      preview: "https://acropolisshoes.herokuapp.com/",
      features: [
        "There are two different types of roles, one is user and the other one is admin",
        "From admin mode admin can easily update or add more product.",
        "User can sort & search products through categories, name, price & time.",
        "User is able to see the specifications of the product by clicking on the product in the next page.",
        "User can add products to cart only if they have logged in..",
        "User can checkout the products which are there in the cart.",
        "Buyers can comment and like the product if they have logged in and authentication with username & password",
      ],
      technology: {
        backend: ["Express for creating backend API", "MongoDB as database"],
        frontend: ["ReactJS for creating user interfaces", "Redux for managing application state and data flow", "Bootstrap & css for designing"],
        factors: ["Code readability & maintainability", "Functionality", "Breakdown of problem", "Testing & Documentation"],
      },
    },
    {
      id: "dev001",
      name: "Dev Connector",
      image: dev2,
      sub: "Fully functional Social app on MERN stack",
      tags: ["Developers", "Social Media"],
      github: "https://github.com/Salahuddin-Gazi/dev-connector",
      preview: "https://developerin.herokuapp.com/",
      features: [
        "I have built this as a learning project. These were my learnings :",
        "Building an extensive backend API with Node.js & Express",
        "Protecting routes/endpoints with JWT (JSON Web Tokens)",
        "Extensive API testing with Postman",
        "Integrating React with our backend in an elegant way, creating a great workflow",
        "Building our frontend to work with the API",
        "Using Redux for app state management",
        "Creating reducers and actions for our resources",
        "Creating many container components that integrate with Redux",
        "Testing with the Redux Chrome extension",
        "Creating a build script, securing our keys and deploy to Heroku using Git",
      ],
      technology: {
        backend: ["Express for creating backend API", "MongoDB as database"],
        frontend: ["ReactJS for creating user interfaces", "Redux for managing application state and data flow", "Bootstrap & css for designing"],
        factors: ["Code readability & maintainability", "Functionality", "Breakdown of problem", "Testing & Documentation"],
      },
    },
  ];
  let [isExist, setExist] = useState({});
  useEffect(() => {
    setExist(items.filter((item) => item.id === id)[0]);
    !isExist && Navigate("error");
  }, []);
  return isExist ? (
    <div className="portfolioDescription px-3">
      <div className="backButton">
        <Link to="/portfolio" style={{ textDecoration: "none", color: "white", padding: "5px" }}>
          <i className="fas fa-arrow-left text-warning"></i> Back To Portfolio
        </Link>
      </div>
      <h1 className="mt-3">{isExist.name}</h1>
      <h5>{isExist.sub}</h5>
      <div className="buttonBox mt-4">
        <a className="btn bg-primary text-light me-4" href={isExist.preview} target={`_blank`}>
          <i className="fas fa-external-link-alt"></i> Preview
        </a>
        <a className="btn bg-dark text-light" href={isExist.github} target={`_blank`}>
          <i className="fab fa-github text-light"></i> Source Code
        </a>
      </div>
      <div className="imageBox mt-2">
        <img src={isExist.image} alt={isExist.name} width={`100%`} />
      </div>
      <div className="descriptionBox mt-5 bg-light px-3 py-2">
        <h3 className="text-center mt-3 mb-1">Features</h3>
        <ul>{isExist.features && isExist.features.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
      </div>
      <div className="descriptionBox mt-5 bg-light px-3 py-2">
        <h3 className="text-center mt-3">Technologies used</h3>

        <h4 className="text-start mt-4">Backend</h4>
        <ul>{isExist.technology && isExist.technology.backend && isExist.technology.backend.map((back, index) => <li key={index}>{back}</li>)}</ul>

        <h4 className="text-start mt-2">Frontend</h4>
        <ul>{isExist.technology && isExist.technology.frontend && isExist.technology.frontend.map((front, index) => <li key={index}>{front}</li>)}</ul>

        <h4 className="text-start mt-2">Factors focused</h4>
        <ul>{isExist.technology && isExist.technology.factors && isExist.technology.factors.map((factor, index) => <li key={index}>{factor}</li>)}</ul>
      </div>
    </div>
  ) : (
    Navigate("error")
  );
};

export default PortfolioDescription;
