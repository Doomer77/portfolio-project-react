import React from "react";
import netflix from "../images/netflix.png";
import cityGuideApp from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
//FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//POPUPBOX REACT
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="netflix clone app..."
        />
        <p>
          amet nulla facilisi morbi tempus iaculis urna id volutpat lacus
          laoreet non curabitur gravida arcu ac tortor dignissim convallis
          aenean et tortor at.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Doomer77/natours")}
        >
          https://github.com/Doomer77/natours
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone App Project",
    },
    fedeIn: true,
    fadeInSpeed: 500,
  };

  //City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuideApp}
          alt="City Guide App Project"
        />
        <p>
          amet nulla facilisi morbi tempus iaculis urna id volutpat lacus
          laoreet non curabitur gravida arcu ac tortor dignissim convallis
          aenean et tortor at.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Doomer77/genprofi")}
        >
          https://github.com/Doomer77/genprofi
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App Project",
    },
    fedeIn: true,
    fadeInSpeed: 500,
  };

  //Portfolio App
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio App Project"
        />
        <p>
          amet nulla facilisi morbi tempus iaculis urna id volutpat lacus
          laoreet non curabitur gravida arcu ac tortor dignissim convallis
          aenean et tortor at.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Doomer77/portfolio-2")}
        >
          https://github.com/Doomer77/portfolio-2
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio App Project",
    },
    fedeIn: true,
    fadeInSpeed: 500,
  };

  //Task Manager
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager App Project"
        />
        <p>
          amet nulla facilisi morbi tempus iaculis urna id volutpat lacus
          laoreet non curabitur gravida arcu ac tortor dignissim convallis
          aenean et tortor at.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Doomer77/nexter")}
        >
          https://github.com/Doomer77/nexter
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager App Project",
    },
    fedeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="netflix clone"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img
              className="portfolio-image"
              src={cityGuideApp}
              alt="city guide app"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="portfolio" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="task manager app"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
