import React from "react";
import СertificatesCarousel from "./СertificatesCarousel";

const Сertificates = () => {
  return (
    <div id="certificates" className="testimonials">
      <h1>Сертификаты</h1>
      <div className="container">
        <div className="testimonials-content">
          <СertificatesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Сertificates;
