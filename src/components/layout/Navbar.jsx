import "../../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="logo">
          KP
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button className="resume-btn">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Navbar;