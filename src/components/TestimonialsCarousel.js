import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Avatars import
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="avatar-1" />
        <div className="my-carousel">
          <h3>Person 1</h3>
          <p>
            magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas accumsan lacus vel facilisis volutpat est velit egestas dui
            id ornare
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="avatar-2" />
        <div className="my-carousel">
          <h3>Person 2</h3>
          <p>
            magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas accumsan lacus vel facilisis volutpat est velit egestas dui
            id ornare
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="avatar-3" />
        <div className="my-carousel">
          <h3>Person 3</h3>
          <p>
            magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas accumsan lacus vel facilisis volutpat est velit egestas dui
            id ornare
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="avatar-4" />
        <div className="my-carousel">
          <h3>Person 4</h3>
          <p>
            magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas accumsan lacus vel facilisis volutpat est velit egestas dui
            id ornare
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
