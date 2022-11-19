import React from 'react';

const SingleProjectBack = ({ project }) => {
  const { name, technology, github, site, youtube } = project;

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default SingleProjectBack;
