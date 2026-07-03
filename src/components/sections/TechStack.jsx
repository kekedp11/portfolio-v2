import "../../styles/TechStack.css";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const frontend = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
];

const backend = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
];

const tools = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <VscCode /> },
];

const database = [
  { name: "MongoDB", icon: <SiMongodb /> },
];

const deployment = [
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
];

function SkillGrid({ title, skills }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">What I Use</p>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <SkillGrid title="Frontend" skills={frontend} />
        <SkillGrid title="Backend" skills={backend} />
        <SkillGrid title="Database" skills={database} />
        <SkillGrid title="Tools" skills={tools} />
        <SkillGrid title="Deployment" skills={deployment} />
      </div>
    </section>
  );
}

export default TechStack;