import React from 'react';

const SingleProject = ({ project }) => {
  const { name, image, description, technology, github, site, youtube } =
    project;

  return (
    <div className="project">
      <div className="img-container">
        <img src={image} className="project-img" alt="creature-coders" />
      </div>
      <div className="project-bottom">
        <p className="font-link">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleProject;
