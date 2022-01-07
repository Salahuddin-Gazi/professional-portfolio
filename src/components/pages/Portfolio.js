import React from "react";
import { useNavigate } from "react-router";
import "../css/Portfolio.css";
import acropolis1 from "../porfolio/images/acropolis/acropolis1.png";
import dev1 from "../porfolio/images/devConnector/dev1.png";

const Portfolio = () => {
  const Navigate = useNavigate();
  const items = [
    {
      id: "acr001",
      posterImg: acropolis1,
      name: "Acropolis Shoes",
      tags: ["Ecommerce", "WebApp"],
      github: "https://github.com/Salahuddin-Gazi/acropolis-shoes",
      preview: "https://acropolisshoes.herokuapp.com/",
    },
    {
      id: "dev001",
      posterImg: dev1,
      name: "Dev Connector",
      tags: ["Developers", "Social Media"],
      github: "https://github.com/Salahuddin-Gazi/dev-connector",
      preview: "https://developerin.herokuapp.com/",
    },
  ];
  return (
    <div>
      <div className="card-body portfolioDiv">
        <h1 className="portfolioHeading card-title text-danger fw-bold">PORTFOLIO</h1>
        <div>
          <p className="card-text portfolioSubheading fw-bold">These are some of my projects</p>
          <hr />
        </div>
        <div className="portfolioContent mt-3">
          <div className="row">
            {items.map((item) => {
              const { id, posterImg, name, tags, github, preview } = item;
              return (
                <div className="col col-12 col-md-12 col-lg-6 mb-5" key={id}>
                  <div className="portfolioContentInfo" onClick={() => Navigate(`${id}`)}>
                    <div className="portfolioImageDiv">
                      <img src={posterImg} alt="Img1" width={`100%`} className="portfolioImag" />
                    </div>
                    <h4>{name}</h4>
                  </div>
                  <div className="d-flex justify-content-between me-2">
                    <div>
                      <i className="fas fa-tags me-1"></i>
                      {tags.map((tag, index) => (
                        <span className="me-2 text-muted portfolioTags" key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div>
                        <a href={github} target={`_blank`} className="me-2 linkTags">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href={preview} target={`_blank`} className="linkTags">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
