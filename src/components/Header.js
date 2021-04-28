import React from "react";
import Typed from "react-typed";

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
          strings={[
            "Web Desing",
            "Web Development",
            "Fcebook Ads SMM",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          напишите мне
        </a>
      </div>
    </div>
  );
};

export default Header;
