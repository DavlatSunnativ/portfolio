import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills" && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Invalid section: ${section}`);
    }
  };

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <MainBanner />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
