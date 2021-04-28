import React from "react";
import autor from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              src={autor}
              alt="Подгорный Сергей - frontend-разработчик"
              className="profile-img"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Обо мне</h1>
          <p>
            Всем привет. Меня зовут Сергей. Я Начинающий HTML-верстальщик и
            Frontend - разработчик. Имею небольшой опыт в коммерческой
            разработке около 5-6 месяцев. Занимался разработкой интерфейса
            приложения для складского учета внутри фирмы в небольшой команде
            разработчиков. Мои основные качества: ответственность, быстрая
            обучаемость, умение работать в команде, достижение поставленных
            целей, принятие самостоятельных решений. При необходимости пройду
            дополнительное обучение по вакансии
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
