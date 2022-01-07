import React from "react";
import "../css/About.css";
import gaziSecondary from "../avatar/gaziSalahuddinSecondary.jpg";
import js from "../logos/js.svg";
import python from "../logos/python.svg";
import react from "../logos/react.svg";
import redux from "../logos/redux.svg";
import firebase from "../logos/firebase-icon.svg";
import materialUi from "../logos/material-ui-1.svg";
import bootstrap from "../logos/bootstrap-5-1.svg";
import javascript from "../logos/javascript-js.svg";
import express from "../logos/expressjs-icon.png";
import mongodb from "../logos/mongodb.svg";
import netlify from "../logos/netlify-icon.svg";
import git from "../logos/git-scm-icon.svg";
import heroku from "../logos/heroku-icon.svg";
import firedUp from "../about/images/firedUp.gif";
import csgo from "../about/images/csgo.ico";
import books from "../about/images/books.png";
import edotco from "../about/images/edotco.png";

const About = () => {
  const languages = [
    {
      itemDesc:
        "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages.",
      itemImg: javascript,
      name: "JavaScript",
      type: "Language",
    },
    {
      itemDesc:
        "Python is a high level general-purpose programming language. It uses a multi-paradigm approach, meaning it supports procedural, object-oriented, and some functional programming constructs.",
      itemImg: python,
      name: "Python",
      type: "Language",
    },
  ];
  const frontEnd = [
    {
      itemDesc:
        "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP.",
      itemImg: react,
      name: "React & React Native",
      type: "Javascript UI Librarie",
    },
    {
      itemDesc:
        "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
      itemImg: redux,
      name: "Redux",
      type: "Javascript UI Librarie",
    },
    {
      itemDesc: "MUI provides a simple, customizable, and accessible library of React components.",
      itemImg: materialUi,
      name: "Material-UI",
      type: "JavaScript Framework Components",
    },
    {
      itemDesc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      itemImg: bootstrap,
      name: "Bootstrap 5",
      type: "CSS Framework",
    },
  ];
  const backEnd = [
    {
      itemDesc:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      itemImg: js,
      name: "Node JS",
      type: "Framework (Full Stack)",
    },
    {
      itemDesc:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
      itemImg: express,
      name: "Express JS",
      type: "Microframework (Backend/API)",
    },
    {
      itemDesc:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      itemImg: mongodb,
      name: "Mong DB",
      type: "Database",
    },
    {
      itemDesc: "Firebase is a platform developed by Google for creating mobile and web applications.",
      itemImg: firebase,
      name: "Firebase",
      type: "Realtime Backend/API",
    },
  ];
  const devOps = [
    {
      itemDesc: "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms.",
      itemImg: heroku,
      name: "Heroku",
      type: "Platform as a Service",
    },
    {
      itemDesc:
        "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
      itemImg: netlify,
      name: "Netlify",
      type: "Static Web Hosting",
    },
    {
      itemDesc:
        "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
      itemImg: git,
      name: "Git",
      type: "Version Control System",
    },
  ];
  return (
    <div>
      <div className="card-body col-12 aboutDiv" style={{ background: "#fff" }}>
        <h1 className="aboutHeading card-title text-primary fw-bold">ABOUT</h1>
        <p className="card-text aboutSubheading">A little bit about Gazi.</p>
        <span className="starIcon">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <hr />
        </span>
        <div className="container infoContainer">
          <p>
            Hi,👏I am Gazi Salahuddin. I always prefer to keep learning, continue challenging myself and do interesting things that matter. I am fueled{" "}
            <img src={firedUp} width="28px" height="28px" style={{ borderRadius: "40%" }} alt="fired up" /> with boundless enthusiasm, easily inspired and more
            than willing to follow my fascinations. I’m a passionate, expressive spirit with a natural ability to prosper and inspire. I am not willing just to
            satisfy myself with ideas. Instead, I have the utmost impulsive resonance to act on them.
          </p>
          <p>
            I decided that it would be a fun challenge to try designing and building full-stack web projects. I mainly work with JavaScript/NodeJS{" "}
            <img src={js} width="28px" height="28px" alt="JS" /> and other JS frameworks, especially with React JS, React Native.
          </p>
          <p>
            I’m a fast learner, able to pick up new skills. I like to develop expertise in several areas over the course of my life and career. I have started
            my early career as System Support Engineer and then shifted to Business Analytics for e.co Bangladesh{" "}
            <img src={edotco} width="28px" height="28px" style={{ borderRadius: "40%" }} alt="edotco" />. And the skills in web development attracted me the
            most.
          </p>
          <p>
            In my free time, I enjoy Web Series and TV Series, Gaming CS: GO
            <img src={csgo} width="28px" height="28px" alt="Series" />
            with friends. I’m also a great fan of the Bangladesh Cricket Team.
          </p>
          <p>
            This year goal: finish reading 20 books <img src={books} width="28px" height="28px" style={{ borderRadius: "40%" }} alt="Books" /> along with "The
            Lean Startup", "The Intelligent Investor" and "How To Make Money In Stocks".
          </p>
        </div>
        <div>
          <img src={gaziSecondary} alt="Preview" className="gaziSecondary" alt="Gazi" />
          <p className="text-center fs-3 fw-bold">Me</p>
        </div>
      </div>
      <div className="myStackDiv mt-5">
        <h1 className="card-title text-primary fw-bold">STACK</h1>
        <span className="starIcon">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <hr />
        </span>
        <div className="col-12 languages">
          {" "}
          <div className="subHeadingDiv">
            <sub className="subHeading">Languages</sub>
          </div>
          <div className="rowDiv">
            {languages.map((lang, index) => {
              return <ItemBox key={index} props={lang} />;
            })}
          </div>
        </div>
        <div className="col-12 frontend">
          {" "}
          <div className="subHeadingDiv">
            <sub className="subHeading">Frontend</sub>
          </div>
          <div className="rowDiv">
            {frontEnd.map((lang, index) => {
              return <ItemBox key={index} props={lang} />;
            })}
          </div>
        </div>
        <div className="col-12 backend">
          {" "}
          <div className="subHeadingDiv">
            <sub className="subHeading">Backend</sub>
          </div>
          <div className="rowDiv">
            {backEnd.map((lang, index) => {
              return <ItemBox key={index} props={lang} />;
            })}
          </div>
        </div>
        <div className="col-12 devOps">
          {" "}
          <div className="subHeadingDiv">
            <sub className="subHeading">DevOps and Utilities</sub>
          </div>
          <div className="rowDiv">
            {devOps.map((lang, index) => {
              return <ItemBox key={index} props={lang} />;
            })}
          </div>
        </div>
      </div>
      <div className="resume mt-5 bg-light">
        <h1 className="card-title text-primary fw-bold mt-3 mb-2">Resume</h1>
        <span className="starIcon">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <hr />
        </span>
        <div className="resumeContent">
          <div className="experience">
            <h3>Experience</h3>
            <div className="d-block">
              <h5 className="text-decoration-underline text-primary">
                <a href="http://159.65.144.190/" target="_blank">
                  Contessa Solutions & Consultants Ltd
                </a>
              </h5>
              <span className="card-text d-block">System Support Engineer</span>
              <span className="card-text d-block">June 2020 - February 2021</span>
              <span className="card-text d-block">Dhaka, Bangladesh</span>
              <p className="mt-3 responsiveText">
                The job aims to work as a Project-based Technical Support and be responsible for Linux Server Maintenance, Monitoring, and Troubleshoot
                Escalation of Telecom Operator Robi Axiata Limited.
              </p>
              <p className="responsiveText">
                We are responsible for the first stage of fault restoration of Linux Servers of Robi Value Added Services (VAS). Our team works with AShield
                (India) to ensure proper availability and security to Robi Value Added Services (VAS) for customers. We are also responsible for testing new &
                upcoming services which in line to be added as Value Added Services.
              </p>
            </div>
            <div>
              <h5 className="text-decoration-underline text-primary">
                <a href="https://edotcogroup.com/bangladesh/" target="_blank">
                  edotco Bangladesh Co. Ltd.
                </a>
              </h5>
              <span className="card-text d-block">Technician, Technology</span>
              <span className="card-text d-block">April 2021 – October 2021</span>
              <span className="card-text d-block">Dhaka, Bangladesh</span>
              <p className="mt-3 responsiveText">
                Worked under Service Excellence. The main goal of my service as a member of Service Excellence to provide support to Robi 2G, 3G & 4G. As for my
                part, I create reports (mostly in excel) in 2G, 3G & 4G service assurance. For completion of every report, it takes tremendous feedback from
                both automation services & regional feedback. I am also engaged in dispute settlement with other third-party companies. In dispute settlement,
                we make sure & provide evidence for our services to Robi. For other supports, I also engaged in GP 2G Task & Service reports & during disaster
                provide emergency services to Regional Manager of edotco tower sites.
              </p>
            </div>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li className="responsiveText">
                C, C++, Python, HTML, CSS, JavaScript, NodeJS, ReactJS, Redux State Management, Context API, Express.JS, MERN (MongoDB, Express, React & Redux,
                Node) Full Stack Developer.
              </li>
              <li className="responsiveText">
                Linux Server Administration, Linux Server maintenance & monitoring, Linux Apache Server, Linux shell script writing
              </li>
              <li className="responsiveText">
                AWS (VPC, Subnet, Routing Table, IGW, Elastic IGW, EC2 instances, S3, RDS, ELB, Cloud Watch, LightSail, AWS Linux Server 2, Ubuntu Server)
              </li>
              <li className="responsiveText">Microsoft Office, MATLAB, PyQt 5, Electronic Workbench, NI Multisim, CST, Adobe Photoshop, VMware, VirtualBox.</li>
              <li>Raspberry Pi 3 Model B, Arduino Uno, FlySky FS-I6.</li>
            </ul>
          </div>
          <div className="certificate">
            <h3>Certificate</h3>
            <ul>
              <li>
                {" "}
                <a href="https://www.coursera.org/account/accomplishments/certificate/3HESSAX7WG2A">“AWS Fundamentals: Going Cloud-Native” from Coursera</a>
              </li>
              <li>“Linux Server Management and Security” from Coursera</li>
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="card-body responsiveText">
              <span className="d-block">Khulna University,</span>
              <span className="d-block">B.Sc. (Hons) in Electronics & Communication Engineering,</span>
              <span className="d-block">Period of 2015-2019, 4 years,</span>
              <span className="d-block">CGPA 3.55/4.00,</span>
              <span className="d-block">Remarks marks attained 75%, along with 3 times merit scholarship.</span>
            </div>
          </div>
        </div>
        <a href="https://mega.nz/folder/4GwHSSBB#9umY_oUKXb0Z-K-MaNuf4A" target={"_blank"} className="mb-4">
          Get My Full Resume {`--->`}
        </a>
      </div>
      <div className="contact mt-4">
        <h1 className="card-title text-primary fw-bold mt-3">Contact 💬</h1>
        <span className="starIcon">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <hr />
        </span>
        <div className="contactInfo">
          <span>
            If you have any questions or if you want to say hello, you can send me an email at{" "}
            <a href="mailto:gazisalahuddin@outlook.com">gazisalahuddin@outlook.com</a>. Also connect me at{" "}
            <a href="https://www.linkedin.com/in/sa1ahudd1n/" target={"_blank"}>
              Linked In.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const ItemBox = ({ props: { itemDesc, itemImg, name, type } }) => {
  return (
    <div className="itemBox">
      <div className="content">
        <div className="popupDiv">
          <p className="popupText">{itemDesc}</p>
        </div>
        <img src={itemImg} alt={name} />
      </div>
      <p className="name">{name}</p>
      <p className="type">{type}</p>
    </div>
  );
};

export default About;
