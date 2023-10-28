import React from 'react';
import { useState } from 'react';
import './NavBar.scss';
import Icon from './Icon';
import { useModal } from '../hooks/UseModal';
import Modal from './Modal';

export const NavBar = ({ currentSection, screenSize, text, sections }) => {
  const downModal = useModal(false);
  const [NavBar, setNavBar] = useState(true);

  const changeBackground = () => {
    window.scrollY > 45 ? setNavBar(false) : setNavBar(true);
  };

  const handleClick = sectionId => {
    const section = document.getElementById(sectionId);
    const yOffset = sectionId === 'home' ? 0 : section.offsetTop;
    if (section) {
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      });
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav id="nav-bar" className={NavBar ? 'nav-bar' : 'nav-bar active'}>
      {sections.map((sec, i) => (
        <button
          onClick={() => handleClick(sec.id)}
          className={
            currentSection === sec.id
              ? NavBar
                ? 'nav-bar__icon active icon-selected'
                : 'nav-bar__icon icon-selected'
              : NavBar
              ? 'nav-bar__icon active'
              : 'nav-bar__icon '
          }
        >
          {screenSize < 720 ? (
            <Icon key={sec.name} icon={sec.icon} />
          ) : (
            text[`sec-${i + 1}`]
          )}
        </button>
      ))}

      <button
        onClick={downModal.openModal}
        className="nav-bar__icon icon-highlighted"
      >
        {screenSize < 720 ? (
          <Icon key={'cv'} icon={'read-cv-logo-fill'} />
        ) : (
          text.download
        )}
      </button>

      <Modal isOpen={downModal.isOpen} closeModal={downModal.closeModal}>
        <h3>{text.modals.downModal.title}</h3>
        <p>{text.modals.downModal.text}</p>
        <a
          href="https://drive.google.com/file/d/18E_uf3UNSxv8xJ62XJw38xAm5_3U81r4/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          download="CV_Gaggioli"
          className="btn-accept"
          onClick={downModal.closeModal}
        >
          {text.modals.downModal.btn.toUpperCase()}
        </a>
      </Modal>
    </nav>
  );
};
