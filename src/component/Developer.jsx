import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Developer.scss';

const Developer = ({ screensize, text, projects }) => {
  return (
    <div id="developer" className="container">
      <div className="separator"></div>
      <h2 className="title">{text.title}</h2>
      <p className="single-p">{text.caption}</p>
      <p className="normal-p">{text.desc}</p>
      <div className="projects__container">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Developer;
