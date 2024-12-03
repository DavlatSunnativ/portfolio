import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../img/logo.png";

const NavBar = ({ scrollToSection }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (section) => {
    setActiveLink(section);
    scrollToSection(section); // Call the function to scroll to the section
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="Logo" id="logo" />
        </a>
        <button
          className="btn btn-light bg-light navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li
              className={`nav-item ms-5 ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleScroll("home")}
            >
              <a className="nav-link">Home</a>
            </li>
            <li
              className={`nav-item ms-5 ${activeLink === "skills" ? "active" : ""}`}
              onClick={() => handleScroll("skills")}
            >
              <a className="nav-link">Skills</a>
            </li>
            <li
              className={`nav-item ms-5 ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleScroll("contact")}
            >
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
