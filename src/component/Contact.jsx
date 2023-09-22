import React from 'react';
import { useState,useEffect } from 'react';
import '../styles/Contact.scss';
import Icon from './Icon';
import icons from "../assets/icons/_icons.svg"


const Contact = ({ language, contacts }) => {
  const [currentContact, setCurrentContact] = useState(contacts[0]);
  const [activeElementCoords, setActiveElementCoords] = useState({ y: 0, x: 0});
  // const [finalCoords, setFinalCoords] = useState({ y: 0, x: 0});
  const [activeElement, setActiveElement] = useState(null);
  const iconElement = document.querySelector('.contact__main-icon')

  // useEffect(() => {
  //   setActiveElement( document.querySelector('.contact__icon.active'));

  //   // setActiveElement( document.getElementById(contacts[0].name));
  //   console.log(`Active element:`);
  //   console.log(activeElement); 
  //   console.log(activeElementCoords);
  //   if (activeElement) {
  //     const elementRect = activeElement.getBoundingClientRect();
  //     setActiveElementCoords({ y: elementRect.top, x: elementRect.left });
  //   }
  // },[iconElement]);

  const handleClick = (e,con) => {
    setCurrentContact(con);

    const element = e.target.closest('.contact__icon');

    const iconFinal = document.querySelector('.contact__main-icon')
    const iconCoords = iconFinal.getBoundingClientRect()
    const rect = element.getBoundingClientRect();
    const coordinates = {
      x:  iconCoords.x - rect.x,
      y: -iconCoords.y + rect.y
    };
    console.log('element: ', element);
    console.log('rect: ', rect);
    console.log('iconCoords: ', iconCoords);
    console.log('coords: ', coordinates);
    // setFinalCoords()
    setActiveElementCoords(coordinates );
  
  };

  return (
    <div id="contact" className="container">
      <div className="separator"></div>
      <h2 className="title">{language === 'en' ? 'CONTACT' : 'CONTACTO'}</h2>
      <div className="contact__display">
        <div className="contact__icons-column">
          {contacts.map(contact => (
          <svg key={contact.name} id={contact.name} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              className={`contact__icon ${
                currentContact.name === contact.name ? 'active' : ''
              }`}
              onClick={(e) => {
                handleClick(e,contact);
              }}
            >
              <use href={`${icons}#${contact.icon}` } />           
          </svg>
            // <Icon icon={contact.icon} iconStyle={`contact__icon ${
            //   currentContact.name === contact.name ? 'active' : ''
            // }`}  onClick={() => {
            //   handleClick(contact);
              
            // }}/>
          ))}

        </div>
        <aside>
        <Icon icon={currentContact.icon} iconStyle={'contact__main-icon'} xPos={activeElementCoords.x+'px'} yPos={activeElementCoords.y+'px'}          
            />
          <div  className="contact__name">{currentContact.name}</div>
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
