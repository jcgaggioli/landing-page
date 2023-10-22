import React from 'react';
import Modal from './Modal';
import './Modals.scss';

const Modals = ({ modals, text }) => {
  //REFACTOR make it easier if lots of modals
  return (
    <div>
      {/*DOWNLOAD CV----------- */}
      <Modal
        isOpen={modals.modal1.isOpen}
        closeModal={modals.modal1.closeModal}
      >
        <h3>{text.modal1.title}</h3>
        <p>{text.modal1.text}</p>
        <a
          href="https://drive.google.com/file/d/18E_uf3UNSxv8xJ62XJw38xAm5_3U81r4/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          download="CV_Gaggioli"
          className="btn-accept"
          onClick={modals.modal1.closeModal}
        >
          {text.modal1.btn.toUpperCase()}
        </a>
      </Modal>
      <Modal
        isOpen={modals.modalProjects.isOpen}
        closeModal={modals.modalProjects.closeModal}
      ></Modal>
    </div>
  );
};

export default Modals;
