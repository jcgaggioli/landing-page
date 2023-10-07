import React from 'react';
import { useState } from 'react';
import '../styles/NavBar.scss';
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
        // onClick={() => handleClick("download-cv")}
        className="nav-bar__icon icon-highlighted"
      >
        {screenSize < 720 ? (
          <Icon key={'cv'} icon={'read-cv-logo-fill'} />
        ) : (
          'DOWNLOAD CV'
        )}
        {/* <Icon key={'cv'} icon={'read-cv-logo-fill'} /> */}
      </button>
    </nav>
  );
};
