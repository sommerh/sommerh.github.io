import React from 'react';
import creatureCoders from '../images/creature-coders-border.jpg';
import worx from '../images/bells-custom-worx.jpg';
import wawdt from '../images/wawdt.jpg';
import inhale from '../images/inhale.jpg';
import SingleProject from './SingleProject';

const projects = [
  {
    name: 'Creature Coders',
    image: creatureCoders,
    description: 'A mobile-first learn-to-code game',
    technology: [],
    github: 'https://github.com/pigeon-programmers/creature-coders-web',
    site: 'https://creature-coders.herokuapp.com/',
    youtube: 'https://www.youtube.com/watch?v=I6Ia7ONRNME',
  },
  {
    name: 'What Are We Doing Today?',
    image: wawdt,
    description:
      'A decision-making app to get users out of the house and into the community',
    technology: [],
    github: 'https://github.com/WhatAreWeDoingToday/WhatAreWeDoingToday',
    site: 'https://whatarewedoingtoday.github.io/WhatAreWeDoingToday/',
    youtube: null,
  },
  {
    name: "Bell's Custom Worx",
    image: worx,
    description:
      'An e-commerce site for selling handcrafted decor and furnishings',
    technology: [],
    github: 'https://github.com/GH2202-Team-Worx/Worx',
    site: 'https://bells-custom-worx.herokuapp.com/',
    youtube: null,
  },
  {
    name: 'inhale',
    image: inhale,
    description:
      'An interactive wellness site focused on breathing/grounding strategies',
    technology: [],
    github: 'https://github.com/sommerh/inhale',
    site: null,
    youtube: null,
  },
];
/*
TODO:
add front and back views of projects
add functionality for turning cards
*/

const Projects = () => {
  return (
    <div id="projects" className="segment yellow-bg-lt">
      <div id="projects-body">
        <h1 className="font-link">Projects</h1>
        <p>
          <em>click on a project to learn more</em>
        </p>
        <div id="project-icons">
          {projects.map((project) => (
            <SingleProject project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
