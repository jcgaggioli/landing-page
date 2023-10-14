import React from 'react';
import Modal from './Modal';
import { useModal } from '../hooks/UseModal';

const Modals = ({ modals }) => {
  // const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  //REFACTOR make it easier if lots of modals

  return (
    <div>
      <Modal
        isOpen={modals.modal1.isOpen}
        closeModal={modals.modal1.closeModal}
      >
        <h3>Download CV?</h3>
        <button>YES</button>
      </Modal>
    </div>
  );
};

export default Modals;
