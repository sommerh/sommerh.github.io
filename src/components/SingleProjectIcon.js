import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProjectIcon = ({ link, icon }) => {
  return (
    <>
      <a href={link} className="project-icons" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
      </a>
    </>
  );
};

export default SingleProjectIcon;
