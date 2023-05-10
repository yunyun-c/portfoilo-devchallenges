import React from "react";

const Hobbies = ({ hobbies }) => {
  return (
    <div className="hobbies">
      <div className="hobbie-list">
        {hobbies.map((hobbie) => (
          <div key={hobbie.id} className="hobbie">
            <img src={hobbie.picture} alt={hobbie.title} />

            <h3>{hobbie.title}</h3>
            <p>{hobbie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hobbies;
