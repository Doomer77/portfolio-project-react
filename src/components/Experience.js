import React from "react";

const Experience = () => {
  return (
    <div id="expirience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>мои навыки</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>HTML5</h3>
            <p>
              Умение создавать современные сайты и приложения, используя
              современные семантическую верстку и инструменты в HTML5.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>CSS3 и SASS</h3>
            <p>
              Использую современные свойства CSS3 для создания адаптивных и
              кроссбраузерных приложении, а также для создания красивых анимации
              и эфектов. Применяю SASS для более быстрой и эфективной
              стилизации, а так же для удобного использования БЭМ. Для быстрой
              стилизации компонентов использую Bootstrap.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>JavaScript</h3>
            <p>
              Как основной инструмент для написания фронтендной части
              приложений, использую современные возможности JavaScript, с
              применением основных принципов кроссбраузерности.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>React JS</h3>
            <p>
              Для создания более гибких и отзывчивых пользовательских
              интерфейсов, применяю React JS.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>PHP</h3>
            <p>
              Имею базовые основы процедурного и объектно-ориентированного
              программирования на PHP с использованием базовых запросов к MySQL.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Photoshop</h3>
            <p>
              Для создания и работы с макетами сайтов, использую инструменты
              Adobe Photoshop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
