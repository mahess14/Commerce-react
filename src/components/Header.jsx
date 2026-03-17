import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src="/images/logos.jpeg"
            alt="Commercemaestro - Best Accounting Training in Hyderabad"
            className="logo"
          />

          <div className="logo-text">
            <span className="lang-content active" data-lang="en">
              Commerce Maestro
            </span>
            <span className="lang-content" data-lang="te">
              కామర్స్ మాస్ట్రో
            </span>
          </div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Home</span>
                <span className="lang-content" data-lang="te">హోమ్</span>
              </a>
            </li>

            <li>
              <a href="#services" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Services</span>
                <span className="lang-content" data-lang="te">సేవలు</span>
              </a>
            </li>

            <li>
              <a href="#training" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Training</span>
                <span className="lang-content" data-lang="te">ట్రైనింగ్</span>
              </a>
            </li>

            <li>
              <a href="#videogallery" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Video Gallery</span>
                <span className="lang-content" data-lang="te">వీడియో గ్యాలరీ</span>
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Success Stories</span>
                <span className="lang-content" data-lang="te">సక్సెస్ స్టోరీస్</span>
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                <span className="lang-content active" data-lang="en">Contact</span>
                <span className="lang-content" data-lang="te">సంప్రదించండి</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;