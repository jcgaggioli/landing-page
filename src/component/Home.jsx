import React from 'react';
import '../styles/_custom.scss';
import '../styles/_components.scss';
import '../styles/Home.scss';

const Home = ({ screenSize, text }) => {
  return (
    <div id="home" className="container">
      <>
        <p className="small-p">{text.greet}</p>
        <h1 className="title">{text.name}</h1>
        <h1 className="title">{text.lastName}</h1>
        <p className="single-p">{text.caption}</p>
        <p className="normal-p">{text.desc}</p>
      </>
    </div>
  );
};

export default Home;
