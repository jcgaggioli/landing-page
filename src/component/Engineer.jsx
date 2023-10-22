import ProjectCard from './ProjectCard';
import './Engineer.scss';
import { useModal } from '../hooks/UseModal';
import Modal from './Modal';
import React, { useState } from 'react';

const Engineer = ({ text, projects }) => {
  const projectModal = useModal(false);
  const [curProject, setCurProject] = useState(projects[0]);

  return (
    <div id="engineer" className="container">
      {/* <div className="engineer__img"> </div> */}
      <div className="separator"></div>
      <h2 className="title">{text.title}</h2>
      <p className="single-p">{text.caption}</p>
      <p className="normal-p">{text.desc}</p>
      <div className="projects__container">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={project}
            openModal={projectModal.openModal}
            setCurProject={setCurProject}
          />
        ))}
      </div>
      <Modal isOpen={projectModal.isOpen} closeModal={projectModal.closeModal}>
        <img
          className="project-card__img"
          src={curProject.img}
          alt={curProject.img}
        />

        <div className="project-card__desc">
          <div className="project-card__title">
            {curProject.name.toUpperCase()}
          </div>
          <div className="project-card__caption">{curProject.airfield}</div>
          <p>{curProject.description}</p>
        </div>
      </Modal>
    </div>
  );
};
export default Engineer;
