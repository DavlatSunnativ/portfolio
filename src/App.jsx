import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import  "./App.css"

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (section) => {
    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills" && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Pass the scroll function as a prop to NavBar */}
      <NavBar scrollToSection={scrollToSection} />
      
      {/* Add refs to the sections */}
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
