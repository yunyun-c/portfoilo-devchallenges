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
            <p>{project.skills}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.githubLink}>GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
