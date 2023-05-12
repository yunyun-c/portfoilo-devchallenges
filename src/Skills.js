import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h2>Front End</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <i className={skill.icon}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
