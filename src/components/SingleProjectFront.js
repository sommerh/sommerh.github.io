import React from 'react';

const SingleProjectFront = ({ project, state }) => {
  const { name, image, description } = project;

  return (
    <>
      <div className="img-container">
        <img src={image} className="project-img" alt="creature-coders" />
      </div>
      <div className="project-bottom">
        <p className="font-link project-name">{name}</p>
        <p className="project-details">{description}</p>
      </div>
    </>
  );
};

export default SingleProjectFront;
