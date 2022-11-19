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
//TODO: make sep. icon component call during a map through arr

const Skills = () => {
  return (
    <div id="skills" className="segment yellow-bg">
      <div id="skills-body">
        <h1 className="font-link pink-txt">Skills</h1>
        <div id="skills-icons">
          <div className="icon-group">
            <img src={javascript} className="icons" alt="javascript" />
            <p>Javascript</p>
          </div>
          <div className="icon-group">
            <img src={react} className="icons" alt="react" />
            <p>React</p>
          </div>
          <div className="icon-group">
            <img src={redux} className="icons" alt="redux" />
            <p>Redux</p>
          </div>
          <div className="icon-group">
            <img src={node} className="icons" alt="node" />
            <p>Node</p>
          </div>
          <div className="icon-group">
            <img src={api} className="icons" alt="api" />
            <p>RESTful API</p>
          </div>
          <div className="icon-group">
            <img src={express} className="icons express" alt="express" />
            <p>Express</p>
          </div>
          <div className="icon-group">
            <img src={sequelize} className="icons" alt="sequelize" />
            <p>Sequelize</p>
          </div>
          <div className="icon-group">
            <img src={prisma} className="icons" alt="prisma" />
            <p>Prisma</p>
          </div>
          <div className="icon-group">
            <img src={postgres} className="icons" alt="postgreSQL" />
            <p>PostgreSQL</p>
          </div>
          <div className="icon-group">
            <img src={html5} className="icons" alt="html5" />
            <p>HTML</p>
          </div>
          <div className="icon-group">
            <img src={css3} className="icons" alt="css3" />
            <p>CSS</p>
          </div>
          <div className="icon-group">
            <img
              src={styledComponents}
              className="icons"
              alt="styled-components"
            />
            <p>Styled Components</p>
          </div>
          <div className="icon-group">
            <img src={heroku} className="icons" alt="heroku" />
            <p>Heroku</p>
          </div>
          <div className="icon-group">
            <img src={git} className="icons" alt="git" />
            <p>Git</p>
          </div>
          <div className="icon-group">
            <img src={procreate} className="icons" alt="procreate" />
            <p>Procreate</p>
          </div>
          <div className="icon-group">
            <img src={management} className="icons" alt="management" />
            <p>Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
