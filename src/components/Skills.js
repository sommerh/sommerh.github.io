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
import procreate from '../images/icons/procreate.png';
import management from '../images/icons/checklist.png';

//TODO: make sep. icon component call during a map through arr

const skillsArr = [
  { id: 1, name: 'Javascript', icon: javascript },
  { id: 2, name: 'React', icon: react },
  { id: 3, name: 'Redux', icon: redux },
  { id: 4, name: 'Node', icon: node },
  { id: 5, name: 'RESTful API', icon: api },
  { id: 6, name: 'Express', icon: express },
  { id: 7, name: 'Sequelize', icon: sequelize },
  { id: 8, name: 'Prisma', icon: prisma },
  { id: 9, name: 'PostgreSQL', icon: postgres },
  { id: 10, name: 'HTML', icon: html5 },
  { id: 11, name: 'CSS', icon: css3 },
  { id: 12, name: 'Styled Components', icon: styledComponents },
  { id: 13, name: 'Heroku', icon: heroku },
  { id: 14, name: 'Git', icon: git },
  { id: 15, name: 'Procreate', icon: procreate },
  { id: 16, name: 'Management', icon: management },
];

const Skills = () => {
  return (
    <div id="skills" className="segment yellow-bg">
      <div id="skills-body">
        <h1 className="font-link pink-txt">Skills</h1>
        <div id="skills-icons">
          {skillsArr.map((skill) => (
            <SkillsIcon key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
