import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Avatars import
import certificate1 from "../images/certificates/CSS_and_Sass_Flexbox_Grid,_Animations_and_More.png";
import certificate2 from "../images/certificates/HTML_Academy.png";

const СertificatesCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <>
        <img src={certificate1} alt="avatar-1" />
        <div className="my-carousel">
          <h3>
            Сертификат о прохождении курса по CSS, Flexbox, CSS Grid, SASS
          </h3>
          <p>
            Продвинутый, современный и самый полный курс по CSS. Курс расчитан
            на изучение сложных анимаций CSS, передовых методов адаптивного
            дизайна, макетов Flexbox, Sass, CSS Grid, основных концепции CSS и
            многое другое.
          </p>
        </div>
      </>
      <>
        <img src={certificate2} alt="avatar-2" />
        <div className="my-carousel">
          <h3>JavaScript. Профессиональная разработка веб-интерфейсов</h3>
          <p>
            Программа данного курса была направлена на работу со встроенным API,
            DOM, обработками событий, модулями, со структурой данных и
            производительностью. А так же был рассмотрен сборщик проектов
            Webpack.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default СertificatesCarousel;
