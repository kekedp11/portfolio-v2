import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#hero" className="logo">
          KP
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#tech-stack" onClick={() => setMenuOpen(false)}>
                Tech Stack
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <li>
              <button className="resume-btn">
                Resume
              </button>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;