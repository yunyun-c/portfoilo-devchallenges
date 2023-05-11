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
              <button>
                <a href={project.demoLink}>Demo</a>
              </button>
              <button>
                <a href={project.githubLink}>Code</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
