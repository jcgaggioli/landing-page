import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Engineer.scss';

const Engineer = ({ text, projects }) => {
  return (
    <div id="engineer" className="container">
      {/* <div className="engineer__img"> </div> */}
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
export default Engineer;
