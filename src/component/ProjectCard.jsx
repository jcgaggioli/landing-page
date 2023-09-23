import React from 'react';
import '../styles/ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" style={{ '--img': project.img }}>
      <img src={project.img} alt={project.img} />
      <h4 className="project-card__title">{project.name}</h4>
    </div>
  );
};

export default ProjectCard;
