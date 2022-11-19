import React, { useState } from 'react';
import SingleProjectBack from './SingleProjectBack';
import SingleProjectFront from './SingleProjectFront';

const SingleProject = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="project">
      <div>
        {!flipped ? (
          <SingleProjectFront key={project.id} project={project} />
        ) : (
          <SingleProjectBack key={project.id} project={project} />
        )}
      </div>
      <button
        className="font-link show-more"
        type="button"
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped ? 'details' : 'go back'}
      </button>
    </div>
  );
};

export default SingleProject;
