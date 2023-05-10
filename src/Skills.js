import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <i className={`icon-${skill.icon}`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
