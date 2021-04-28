import React from "react";
import bipservice from "../images/bipservice.png";
import genprofi from "../images/genprofi.png";
import keksobooking from "../images/keksobooking.png";
import portfolio from "../images/portfolio.png";
//FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//POPUPBOX REACT
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //BIP
  const openPopupboxBIP = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={bipservice}
          alt="Сайт сервисной фирмы ООО НПФ БИП сервис"
        />
        <p>
          Мой первый рабочий проект, реализованный для сервисной фирмы ООО "НПФ
          БИП сервис". Для создания сайта, был разработан макет в Adobe
          Phtoshop. Верстка сайта реализована на CSS Flexbox. Для разработки
          интерактивности сайта применялись Jquery плагины Fancybox, Slick
          slider. Был применены SASS и БЭМ для быстрой стилизации компонентов. В
          качестве инструментов сборки проекта применялся менеджер пакетов NPM.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://www.bipservice-moskva.ru/", "_blank")
          }
        >
          https://www.bipservice-moskva.ru/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Doomer77/bipsrvce", "_blank")
          }
        >
          https://github.com/Doomer77/bipsrvce
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Сайт сервисной фирмы ООО НПФ БИП сервис",
        },
        fedeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //Genprofi
  const openPopupboxGenprofi = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={genprofi}
          alt="Сайт сервисной фирмы ООО Генпрофи"
        />
        <p>
          Рабочий проект, реализованный для сервисной фирмы ООО "Генпрофи". Для
          создания сайта, был разработан макет в Adobe Phtoshop. Верстка сайта
          реализована на CSS Flexbox. Для разработки интерактивности сайта
          применялись Jquery плагины Fancybox, Slick slider. Был применены SASS
          и БЭМ для быстрой стилизации компонентов. В качестве инструментов
          сборки проекта применялся менеджер пакетов NPM.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://www.genprofi.ru/", "_blank")}
        >
          https://www.genprofi.ru/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Doomer77/genprofi", "_blank")
          }
        >
          https://github.com/Doomer77/genprofi
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Сайт сервисной фирмы ООО Генпрофи",
        },
        fedeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //Keksobooking App
  const openPopupboxKeksobooking = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={keksobooking}
          alt="Учебный проект Keksobooking"
        />
        <p>
          «Кексобукинг» — мой основной проект, который я успешно защитил на
          интенсиве "JavaScript. Профессиональная разработка веб-интерфейсов
          Уровень 1". Программа данного курса была направлена на работу со
          встроенным API, DOM, обработками событий, модулями, со структурой
          данных и производительностью. А так же был рассмотрен сборщик проектов
          Webpack.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("http://keksobooking.pjparts.ru/", "_blank")
          }
        >
          http://keksobooking.pjparts.ru/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Doomer77/1392667-keksobooking-21")
          }
        >
          https://github.com/Doomer77/1392667-keksobooking-21
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Учебный проект Keksobooking",
        },
        fedeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Проект моего портфолио"
        />
        <p>
          Проект моего рабочего портфолио, разработанный на React JS и Bootstrap
          4.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Doomer77/portfolio-project-react",
              "_blank"
            )
          }
        >
          https://github.com/Doomer77/portfolio-project-react
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Проект моего портфолио",
        },
        fedeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Мои проекты</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxBIP}>
            <img
              className="portfolio-image"
              src={bipservice}
              alt="Сайт сервисной фирмы ООО НПФ БИП сервис"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxGenprofi}>
            <img
              className="portfolio-image"
              src={genprofi}
              alt="Сайт сервисной фирмы ООО Генпрофи"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={openPopupboxKeksobooking}
          >
            <img
              className="portfolio-image"
              src={keksobooking}
              alt="Учебный проект Keksobooking"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Проект моего портфолио"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
