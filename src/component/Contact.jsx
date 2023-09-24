import React from 'react';
import { useState } from 'react';
import '../styles/Contact.scss';
import Icon from './Icon';

const Contact = ({ language, contacts }) => {
  const [currentContact, setCurrentContact] = useState(contacts[0]);
  const [activeElementCoords, setActiveElementCoords] = useState({
    y: 0,
    x: 0,
  });

  const handleClick = (e, con) => {
    setCurrentContact(con);
    console.log(e.target);
    const element = e.target.closest('.contact__icon');
    const iconFinal = document.querySelector('.contact__main-icon');
    const iconCoords = iconFinal.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    const coordinates = {
      x: iconCoords.x - rect.x,
      y: -iconCoords.y + rect.y,
    };
    setActiveElementCoords(coordinates);
  };
  // REFACTOR
  return (
    <div id="contact" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'CONTACT' : 'CONTACTO'}</h2>
      <div className="contact__display">
        <div className="contact__icons-column">
          {' '}
          {contacts.map((contact, i) => {
            if (contacts.length === i + 1) {
              return (
                <Icon
                  key={contact.name}
                  id={contact.name}
                  icon={contact.icon}
                  iconStyle={`contact__icon ${
                    currentContact.name === contact.name ? 'active' : ''
                  }`}
                  onClick={e => {
                    handleClick(e, contact);
                  }}
                />
              );
            } else {
              return [
                <Icon
                  key={contact.name}
                  id={contact.name}
                  icon={contact.icon}
                  iconStyle={`contact__icon ${
                    currentContact.name === contact.name ? 'active' : ''
                  }`}
                  onClick={e => {
                    handleClick(e, contact);
                  }}
                />,
                <div className="contact__black-line">.</div>,
              ];
            }
          })}
          {/* <div className="contact__black-line">.</div> */}
        </div>
        <aside>
          <Icon
            icon={currentContact.icon}
            iconStyle={'contact__main-icon'}
            dxPos={activeElementCoords.x + 'px'}
            dyPos={activeElementCoords.y + 'px'}
          />
          <div className="contact__name">{currentContact.name}</div>
          <a
            target="_blanck"
            className="contact__user-name"
            href={currentContact.destiny}
          >
            {currentContact.userName}
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
