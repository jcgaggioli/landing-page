import React from 'react';

const AboutMe = ({ screenSize, text }) => {
  return (
    <div id="about-me" className="container">
      <div className="separator"></div>
      <h2 className="title">{text.title}</h2>
      <p className="single-p">{text.caption}</p>
      <p className="normal-p">{text.desc}</p>
    </div>
  );
};

export default AboutMe;
