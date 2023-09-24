import './styles/App.scss';
import './styles/_styles.scss';
import { NavBar } from './component/NavBar';
import Home from './component/Home';
import AboutMe from './component/AboutMe';
import Contact from './component/Contact';
import Engineer from './component/Engineer';
import Developer from './component/Developer';
import { useEffect, useState } from 'react';
import Language from './component/Language';
import data from './assets/data.json';
import text from './assets/text.json';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  //choose the screen size
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  //REFACTOR
  useEffect(() => {
    // Función para actualizar currentSection basado en la posición de la página
    const handleScroll = () => {
      const home = document.getElementById('home');
      const about = document.getElementById('about-me');
      const engineer = document.getElementById('engineer');
      const developer = document.getElementById('developer');
      const contact = document.getElementById('contact');
      const scrollPosition = window.scrollY;

      //REFACTOR
      if (
        scrollPosition >= home.offsetTop &&
        scrollPosition < about.offsetTop
      ) {
        setCurrentSection('home');
      } else if (
        scrollPosition >= about.offsetTop &&
        scrollPosition < engineer.offsetTop
      ) {
        setCurrentSection('about-me');
      } else if (
        scrollPosition >= engineer.offsetTop &&
        scrollPosition < developer.offsetTop
      ) {
        setCurrentSection('engineer');
      } else if (
        scrollPosition >= developer.offsetTop &&
        scrollPosition < contact.offsetTop
      ) {
        setCurrentSection('developer');
      } else if (scrollPosition >= contact.offsetTop) {
        setCurrentSection('contact');
      }
    };

    // Agregar un evento de escucha de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div className="App">
      <NavBar
        currentSection={currentSection}
        screenSize={screenSize}
        text={language === 'en' ? text.navBar.en : text.navBar.es}
        sections={text.navBar.sections}
      />
      <Home text={language === 'en' ? text.home.en : text.home.es} />
      <AboutMe text={language === 'en' ? text.aboutMe.en : text.aboutMe.es} />
      <Engineer
        text={language === 'en' ? text.engineer.en : text.engineer.es}
        projects={data.engProjects}
      />
      <Developer
        text={language === 'en' ? text.developer.en : text.developer.es}
      />
      <Contact
        language={language}
        contacts={data.contacts}
        screenSize={screenSize}
      />
      <Language setLanguage={setLanguage} language={language} />
    </div>
  );
}

export default App;
