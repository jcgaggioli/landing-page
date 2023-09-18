import React from 'react';
import { useState } from 'react';
import '../styles/Contact.scss';

const Contact = ({ language, contacts }) => {
  const [currentContact, setCurrentContact] = useState(contacts[0]);

  const handleClick = con => {
    setCurrentContact(con);
  };

  return (
    <div id="contact" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'CONTACT' : 'CONTACTO'}</h2>
      <div className="contact__display">
        <div className="contact__icons-column">
          {contacts.map(contact => (
            <div
              className={`contact__icon ${
                currentContact.name === contact.name ? 'active' : ''
              }`}
              onClick={() => {
                handleClick(contact);
              }}
            >
              {contact.name}
            </div>
          ))}
        </div>
        <aside>
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
