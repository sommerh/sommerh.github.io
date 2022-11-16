import React from 'react';
import NavBar from './NavBar';
import headshot from '../headshot.jpg';

const About = () => {
  return (
    <div id="about" className="segment">
      <img src={headshot} id="headshot" alt="hiking-headshot" />
      <div>
        <p>hello</p>
        <p>more text</p>
      </div>
    </div>
  );
};

export default About;
