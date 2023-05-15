import React from "react";

const PersonalDetails = ({
  myAvatar,
  name,
  jobTitle,
  email,
  phone,
  selfIntro,
}) => {
  return (
    <div className="personal-details">
      <div className="avatar">
        <img src={myAvatar} alt={name} />
      </div>
      <div className="name-title">
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
      </div>
      <div className="contact">
        <p>
          <i class="fa-solid fa-envelope"></i> Email: {email}
        </p>

        <p>
          <i class="fa-solid fa-phone"></i> Phone: {phone}
        </p>
      </div>

      <p className="intro">{selfIntro}</p>
    </div>
  );
};

export default PersonalDetails;
