import React from 'react';

import './ProjectCard.scss';

const ProjectCard = ({ project, openModal, setCurProject }) => {
  const handleClick = function () {
    setCurProject(project);
    openModal();
  };

  return (
    <div
      className="project-card"
      id={project.id}
      style={{ '--img': project.img }}
      onClick={() => {
        handleClick();
      }}
    >
      <img className="project-card__img" src={project.img} alt={project.img} />
      <div
        className="project-card__status"
        style={{
          '--status': `'${project.status.toUpperCase()}'`,
          '--color': `${
            project.status === 'delayed'
              ? '#f4a261'
              : project.status === 'cancelled'
              ? '#e76f51'
              : '#2a9d8f'
          }`,
        }}
      >
        {''}
      </div>
      <div className="project-card__desc">
        <div className="project-card__title">{project.name.toUpperCase()}</div>
        <div className="project-card__caption">{project.airfield}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
