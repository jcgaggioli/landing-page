import React from 'react';
import './Home.scss';

const Home = ({ screenSize, text }) => {
  return (
    <div id="home" className="container">
      <div>
        <p className="small-p">{text.greet}</p>
        <h1 className="title">{text.name}</h1>
        <h1 className="title">{text.lastName}</h1>
        <p className="single-p">{text.caption}</p>
        <p className="normal-p">{text.desc}</p>
      </div>
      <div className="home__img">
        {screenSize > 720 && (
          <img src="assets/img/profile-photo-2.png" alt="Juan Cruz Gaggioli" />
        )}
      </div>
    </div>
  );
};

export default Home;
