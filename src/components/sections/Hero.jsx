import "../../styles/Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Hi, I'm</p>

          <h1 className="hero-title">
            Keke
            <br />
            <span>Pradipta</span>
          </h1>

          <h2 className="hero-role">
            Aspiring Fullstack Developer
          </h2>

          <p className="hero-description">
            Building modern web applications with React while
            continuously learning Node.js and Express to become
            a fullstack developer.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/kekedp11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/keke-pradipta-913b39184"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kekedp11@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-avatar">
            KP
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;