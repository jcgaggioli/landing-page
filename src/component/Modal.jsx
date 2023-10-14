import React from 'react';
import './Modal.scss';

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = e => {
    e.stopPropagation();
  };

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal__container" onClick={handleModalContainerClick}>
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
