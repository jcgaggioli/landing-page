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
      <Modal
        isOpen={projectModal.isOpen}
        closeModal={projectModal.closeModal}
        title="ENGINEERING PROJECT"
      >
        <div className="modal-eng__title">{curProject.name.toUpperCase()}</div>
        <div className="modal-eng__caption">
          {curProject.airfield.toUpperCase()}
        </div>
        <img
          className="modal-eng__img"
          src={curProject.img}
          alt={curProject.img}
        />
        <div className="modal-eng__sub">DESCRIPTION</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptates modi odio ducimus quis? Hic nam minima commodi quae sequi,
          voluptates corporis illo eveniet quisquam vitae ut temporibus, esse
          impedit.
        </p>
        <div className="modal-eng__sub">INVOLVEMENT</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          corporis sapiente quia quis non vel sunt dicta quibusdam sit! Quidem
          magni consectetur vero officiis provident voluptatibus praesentium
          quae distinctio autem?
        </p>
      </Modal>
    </div>
  );
};
export default Engineer;
