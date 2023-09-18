import React from 'react';
import ProjectCard from './ProjectCard';

const projectsList = [
  { name: 'MadBus', img: '/assets/img/madbus.png' },
  { name: 'VotAR', img: '../assets/img/madbus.png' },
  { name: 'Traveler', img: '../assets/img/madbus.png' },
  { name: 'Landing Page', img: '../assets/img/madbus.png' },
];

const Projects = ({ language }) => {
  return (
    <div id="projects" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'PROJECTS' : 'PROYECTOS'}</h2>
      <div className="projects__container">
        {projectsList.map((pro, id) => (
          <ProjectCard key={id} project={pro} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
