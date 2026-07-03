import "../../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">
            Get In Touch
          </p>

          <h2 className="section-title">
            Contact Me
          </h2>
        </div>

        <div className="contact-content">

          <p className="contact-description">
            I'm currently looking for junior frontend/fullstack
            opportunities and I'm always open to freelance work
            or exciting collaborations.
          </p>

          <div className="contact-links">

            <a
              href="mailto:kekedp11@gmail.com"
              className="contact-item"
            >
              📧
              <span>kekedp11@gmail.com</span>
            </a>

            <a
              href="https://github.com/kekedp11"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              💻
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/keke-pradipta-913b39184"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              💼
              <span>LinkedIn</span>
            </a>

          </div>

          <a
            href="mailto:kekedp11@gmail.com"
            className="btn btn-primary"
          >
            Send Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;