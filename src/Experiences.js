import React from "react";

const Experiences = ({ experiences }) => {
  return (
    <div className="experiences">
      <h2>Experiences</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience">
            <img src={experience.companyLogo} alt={experience.companyName} />
            <div className="details">
              <h3>{experience.companyName}</h3>
              <p>{experience.jobTitle}</p>
              <ul>
                {experience.workDetails.map((detail) => (
                  <li key={detail.id}>{detail.detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
