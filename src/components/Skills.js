import React from 'react';
import javascript from '../images/icons/javascript.png';
import react from '../images/icons/react.png';
import redux from '../images/icons/redux.png';
import node from '../images/icons/node.png';
import api from '../images/icons/api.png';
import express from '../images/icons/express.png';
import sequelize from '../images/icons/sequelize.png';
import prisma from '../images/icons/prisma.png';
import postgres from '../images/icons/postgres.png';
import html5 from '../images/icons/html5.svg';
import css3 from '../images/icons/css3.png';
import styledComponents from '../images/icons/styled-components.png';
import heroku from '../images/icons/heroku.png';
import git from '../images/icons/git.png';
import procreate from '../images/icons/procreate.png';
import management from '../images/icons/checklist.png';

//change backgound color to white once segment color is changed

const Skills = () => {
  return (
    <div id="skills" className="segment">
      <div id="skills-body">
        <h1>Skills</h1>
        <div id="skills-icons">
          <img src={javascript} className="icons" alt="javascript" />
          <img src={react} className="icons" alt="react" />
          <img src={redux} className="icons" alt="redux" />
          <img src={node} className="icons" alt="node" />
          <img src={api} className="icons" alt="api" />
          <img src={express} className="icons express" alt="express" />
          <img src={sequelize} className="icons" alt="sequelize" />
          <img src={prisma} className="icons" alt="prisma" />
          <img src={postgres} className="icons" alt="postgreSQL" />
          <img src={html5} className="icons" alt="html5" />
          <img src={css3} className="icons" alt="css3" />
          <img
            src={styledComponents}
            className="icons"
            alt="styled-components"
          />
          <img src={heroku} className="icons" alt="heroku" />
          <img src={git} className="icons" alt="git" />
          <img src={procreate} className="icons" alt="procreate" />
          <img src={management} className="icons" alt="management" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
