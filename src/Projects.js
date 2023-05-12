import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <div className="title">
        <h2>Projects</h2>
        <button>React</button>
        <button>Vue</button>
        <button>Reponsive</button>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.picture} alt={project.title} />
            <p className="sk">{project.skills}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-btn">
              <a className="demo" href={project.demoLink}>
                Demo
              </a>
              <a href={project.githubLink}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
