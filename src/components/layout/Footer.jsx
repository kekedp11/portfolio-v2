import "../../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <h2 className="footer-logo">
          KP
        </h2>

        <p className="footer-text">
          Built with React, Vite, Node.js, Express, and MongoDB.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/kekedp11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/keke-pradipta-913b39184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="footer-copy">
          © 2026 Keke Pradipta. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;