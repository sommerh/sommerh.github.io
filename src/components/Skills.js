import React from 'react';
import SkillsIcon from './SkillsIcon';
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
import agile from '../images/icons/agile.png';
import procreate from '../images/icons/procreate.png';
import management from '../images/icons/checklist.png';

//TODO: make sep. icon component call during a map through arr

const skillsArr = [
  { name: 'Javascript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Redux', icon: redux },
  { name: 'Node', icon: node },
  { name: 'RESTful API', icon: api },
  { name: 'Express', icon: express },
  { name: 'Sequelize', icon: sequelize },
  { name: 'Prisma', icon: prisma },
  { name: 'PostgreSQL', icon: postgres },
  { name: 'HTML', icon: html5 },
  { name: 'CSS', icon: css3 },
  { name: 'Styled Components', icon: styledComponents },
  { name: 'Heroku', icon: heroku },
  { name: 'Git', icon: git },
  { name: 'Agile Methodology', icon: agile },
  { name: 'Procreate', icon: procreate },
  { name: 'Management', icon: management },
];

const Skills = () => {
  return (
    <div id="skills" className="segment yellow-bg">
      <div id="skills-body">
        <h1 className="font-link pink-txt">Skills</h1>
        <div id="skills-icons">
          {skillsArr.map((skill, i) => (
            <SkillsIcon key={i} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
