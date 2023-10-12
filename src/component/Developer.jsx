import React from 'react';
import '../styles/Developer.scss';

const Developer = ({ screensize, text }) => {
  return (
    <div id="developer" className="container">
      <div className="separator"></div>
      <h2 className="title">{text.title}</h2>
      <p className="single-p">{text.caption}</p>
      <p className="normal-p">{text.desc}</p>
    </div>
  );
};

export default Developer;
