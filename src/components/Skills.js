import React from 'react';
import react from '../images/icons/react.jpg';
import redux from '../images/icons/redux.jpg';

const Skills = () => {
  return (
    <div id="skills" className="segment">
      <div id="skills-body">
        <h1>Skills</h1>
        <div id="skills-icons">
          <img src={react} className="icons" alt="react" />
          <img src={redux} className="icons" alt="redux" />
          <div>🦙</div>
          <div>🌲</div>
          <div>🌼</div>
          <div>🍄</div>
          <div>🌍</div>
          <div>🌈</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
