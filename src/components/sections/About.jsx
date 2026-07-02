import "../../styles/About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">Get To Know</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an aspiring fullstack developer passionate about
              building modern, responsive, and user-friendly web
              applications.
            </p>

            <p>
              I enjoy turning ideas into real projects while
              continuously improving my skills in React, Node.js,
              Express, and REST APIs.
            </p>

            <a href="#" className="btn btn-primary">
              Download Resume
            </a>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3>Projects</h3>
              <p>5+ Personal Projects</p>
            </div>

            <div className="info-card">
              <h3>Currently Learning</h3>
              <p>React • Node.js • Express • REST API</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;