import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//https://react-slick.neostack.com/docs/api

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: 'black' }}
      onClick={onClick}
    />
  );
}

const Slides = ({ propSettings }) => {
  const newSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings = { ...propSettings, ...newSettings };

  return (
    <div className="slides-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="./assets/img/ezeiza01-01.jpg" alt="airfield"></img>
        </div>
        <div className="slide">
          <img src="../assets/img/ezeiza01-02.jpg" alt="airfield"></img>
        </div>
        <div className="slide">
          <img src="./assets/img/ezeiza01-03.jpg" alt="airfield"></img>
        </div>
        <div className="slide">
          <img src="./assets/img/ezeiza02-01.jpg" alt="airfield"></img>
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
