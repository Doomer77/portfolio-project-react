import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>
          Подгорный Сергей <br />
          HTML-верстальщик / Frontend-разработчик
        </h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Desing", "Creation Web Interfaces"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link
          smooth={true}
          to="contacts"
          offset={-110}
          href="#"
          className="btn-main-offer"
        >
          Напишите мне
        </Link>
      </div>
    </div>
  );
};

export default Header;
