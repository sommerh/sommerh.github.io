import React from 'react';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import SingleProjectIcon from './SingleProjectIcon';

const SingleProjectBack = ({ project }) => {
  const { name, technology, github, site, youtube } = project;

  return (
    <div id="project-back">
      <p className="font-link project-name">{name}</p>
      <p>
        {technology.map((tech, idx) => (
          <i key={idx}>
            {idx < technology.length - 1 ? `${tech}   |   ` : tech}
          </i>
        ))}
      </p>
      <div className="project-icon-container">
        {github && <SingleProjectIcon link={github} icon={faGithub} />}
        {site && <SingleProjectIcon link={site} icon={faUpRightFromSquare} />}
        {youtube && <SingleProjectIcon link={youtube} icon={faYoutube} />}
      </div>
    </div>
  );
};

export default SingleProjectBack;
