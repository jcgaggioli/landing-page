import React from 'react';

const AboutMe = ({ language }) => {
  return (
    <div id="about-me" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'ABOUT ME' : 'SOBRE MI'}</h2>
      <p className="single-p">
        {language === 'en' ? 'DEVELOPER' : 'DESARROLLADOR'}
      </p>
      {language === 'en' && (
        <p className="normal-p">
          Graduated from UTN (Argentina) as a civil engineer and with several
          years of experience in the airport sector. Looking to enter the world
          of web development and design as well as data analysis and processing.
          I am highly curious and eager to tackle new challenges.
        </p>
      )}
      {language === 'es' && (
        <p className="normal-p">
          Egresado en UTN (Argentina) como ingeniero civil y con varios años de
          experiencia en el sector aeroportuario. Buscando entrar en el mundo
          del desarrollo y diseño web, así como el análisis y procesamiento de
          datos. Con mucha curiosidad ansioso por afrontar nuevos retos.
        </p>
      )}
    </div>
  );
};

export default AboutMe;
