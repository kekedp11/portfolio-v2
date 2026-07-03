// CSS
import "../../styles/Projects.css";

// Components
import ProjectCard from "../ui/ProjectCard";

// Data
import { featuredProjects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">
            My Work
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;