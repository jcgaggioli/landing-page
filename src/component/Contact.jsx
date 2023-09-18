import React from 'react';

const Contact = ({ language }) => {
  return (
    <div id="contact" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'CONTACT' : 'CONTACTO'}</h2>
      <p className="single-p">DEVELOPER</p>
      <p className="normal-p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam
        modi, amet neque expedita ea nemo aliquid eos veniam ex cupiditate,
        maxime ipsam nulla sit provident delectus odio itaque iste.
      </p>
    </div>
  );
};

export default Contact;
