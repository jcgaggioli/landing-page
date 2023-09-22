import React from 'react';
import '../styles/_custom.scss';
import '../styles/_components.scss';
import '../styles/Home.scss';

const Home = ({ language }) => {
  return (
    <div id="home" className="container">
      {language === 'en' ? (
        <>
          <p className="small-p">Hi! I am</p>
          <h1 className="title">JUAN CRUZ</h1>
          <h1 className="title">GAGGIOLI</h1>
          <p className="single-p">DEVELOPER / CIVIL ENGINEER</p>
          <p className="normal-p">
            I'm looking for new challenges and to develope myself further in the
            technology sector
          </p>
        </>
      ) : (
        <>
          <p className="small-p">Hola!, soy</p>
          <h1 className="title">JUAN CRUZ</h1>
          <h1 className="title">GAGGIOLI</h1>
          <p className="single-p">DESARROLLADOR / INGENIERO CIVIL</p>
          <p className="normal-p">
            Estoy buscando nuevos retos y desarrollarme más en el sector de
            tecnologia
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
