import "./styles/App.scss";
import "./styles/_styles.scss";
import { NavBar } from "./component/NavBar";
import Home from "./component/Home";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Frelance from "./component/Frelance";
import { useEffect, useState } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  useEffect(() => {
    // Función para actualizar currentSection basado en la posición de la página
    const handleScroll = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about-me");
      const projects = document.getElementById("projects");
      const freelance = document.getElementById("freelance");
      const contact = document.getElementById("contact");
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= home.offsetTop &&
        scrollPosition < about.offsetTop
      ) {
        setCurrentSection("home");
      } else if (
        scrollPosition >= about.offsetTop &&
        scrollPosition < projects.offsetTop
      ) {
        setCurrentSection("about-me");
      } else if (
        scrollPosition >= projects.offsetTop &&
        scrollPosition < freelance.offsetTop
      ) {
        setCurrentSection("projects");
      } else if (
        scrollPosition >= freelance.offsetTop &&
        scrollPosition < contact.offsetTop
      ) {
        setCurrentSection("freelance");
      } else if (scrollPosition >= contact.offsetTop) {
        setCurrentSection("contact");
      }
    };

    // Agregar un evento de escucha de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Eliminar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div className="App">
      <NavBar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Home />
      <AboutMe />
      <Projects />
      <Frelance />
      <Contact />
    </div>
  );
}

export default App;
