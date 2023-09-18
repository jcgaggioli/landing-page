import React from 'react';

const AboutMe = ({ language }) => {
  return (
    <div id="about-me" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'ABOUT ME' : 'SOBRE MI'}</h2>
      <p className="single-p">DEVELOPER</p>
      <p className="normal-p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam
        modi, amet neque expedita ea nemo aliquid eos veniam ex cupiditate,
        maxime ipsam nulla sit provident delectus odio itaque iste.
      </p>
    </div>
  );
};

export default AboutMe;
