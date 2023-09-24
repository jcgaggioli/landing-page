import React from 'react';
import { useState } from 'react';
import '../styles/NavBar.scss';
import { ReactComponent as UserIcon } from '../assets/icons/user-fill.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-fill.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/house-simple-fill.svg';
import { ReactComponent as EngineerIcon } from '../assets/icons/airplane-fill.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/read-cv-logo-fill.svg';
import { ReactComponent as MouseIcon } from '../assets/icons/mouse-simple-fill.svg';
import Icon from './Icon';

export const NavBar = ({ currentSection, screenSize, text, sections }) => {
  const [NavBar, setNavBar] = useState(true);

  const changeBackground = () => {
    window.scrollY > 45 ? setNavBar(false) : setNavBar(true);
  };

  window.addEventListener('scroll', changeBackground);

  const handleClick = sectionId => {
    // Scroll
    const section = document.getElementById(sectionId);
    const yOffset = sectionId === 'home' ? 0 : section.offsetTop;
    if (section) {
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      });
    }
  };

  console.log(sections);

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
            <Icon
              key={sec.name}
              // id={contact.name}
              icon={sec.icon}
              // iconStyle={'nav-bar__icon '}
              // onClick={''}
            />
          ) : (
            text[`sec-${i + 1}`]
          )}
        </button>
      ))}

      <button
        // onClick={() => handleClick("download-cv")}
        className="nav-bar__icon icon-highlighted"
      >
        <ResumeIcon />
      </button>
    </nav>
  );
};
