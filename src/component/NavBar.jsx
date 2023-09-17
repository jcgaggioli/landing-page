import React from 'react';
import { useState } from 'react';
import '../styles/NavBar.scss';
import { ReactComponent as UserIcon } from '../assets/icons/user-fill.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-fill.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/house-simple-fill.svg';
import { ReactComponent as ProjectsIcon } from '../assets/icons/lightbulb-fill.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/read-cv-logo-fill.svg';
import { ReactComponent as MouseIcon } from '../assets/icons/mouse-simple-fill.svg';

export const NavBar = ({ currentSection }) => {
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
      <button
        onClick={() => handleClick('home')}
        className={
          currentSection === 'home'
            ? NavBar
              ? 'nav-bar__icon active icon-selected'
              : 'nav-bar__icon icon-selected'
            : NavBar
            ? 'nav-bar__icon active'
            : 'nav-bar__icon '
        }
      >
        <HomeIcon />
      </button>
      <button
        onClick={() => handleClick('about-me')}
        className={
          currentSection === 'about-me'
            ? NavBar
              ? 'nav-bar__icon active icon-selected'
              : 'nav-bar__icon icon-selected'
            : NavBar
            ? 'nav-bar__icon active'
            : 'nav-bar__icon '
        }
      >
        <UserIcon />
      </button>

      <button
        onClick={() => handleClick('projects')}
        className={
          currentSection === 'projects'
            ? NavBar
              ? 'nav-bar__icon active icon-selected'
              : 'nav-bar__icon icon-selected'
            : NavBar
            ? 'nav-bar__icon active'
            : 'nav-bar__icon '
        }
      >
        <ProjectsIcon />
      </button>
      <button
        onClick={() => handleClick('freelance')}
        className={
          currentSection === 'freelance'
            ? NavBar
              ? 'nav-bar__icon active icon-selected'
              : 'nav-bar__icon icon-selected'
            : NavBar
            ? 'nav-bar__icon active'
            : 'nav-bar__icon '
        }
      >
        <MouseIcon />
      </button>
      <button
        onClick={() => handleClick('contact')}
        className={
          currentSection === 'contact'
            ? NavBar
              ? 'nav-bar__icon active icon-selected'
              : 'nav-bar__icon icon-selected'
            : NavBar
            ? 'nav-bar__icon active'
            : 'nav-bar__icon '
        }
      >
        <PhoneIcon />
      </button>
      <button
        // onClick={() => handleClick("download-cv")}
        className="nav-bar__icon icon-highlighted"
      >
        <ResumeIcon />
      </button>
    </nav>
  );
};
