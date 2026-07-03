import "../../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item} className="tech-badge">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;