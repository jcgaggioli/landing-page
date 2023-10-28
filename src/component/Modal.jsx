import React from 'react';
import './Modal.scss';
import Icon from './Icon';

const Modal = ({ children, isOpen, closeModal, title }) => {
  const handleModalContainerClick = e => {
    e.stopPropagation();
  };

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal__container" onClick={handleModalContainerClick}>
        <div className="modal__header">
          <div className="modal__title">{title}</div>
          <Icon onClick={closeModal} icon={'close-btn'} />
        </div>
        {children}
      </div>
    </article>
  );
};

export default Modal;
