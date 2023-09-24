import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Engineer.scss';

const Engineer = ({ text, projects }) => {
  return (
    <div id="engineer" className="container">
      <div className="separator"></div>
      <h2 className="title">{text.title}</h2>
      <div className="projects__container">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Engineer;
