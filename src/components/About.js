import React from 'react';
import headshot from '../headshot.jpg';

const About = () => {
  return (
    <div id="about" className="segment">
      <div id="about-body">
        <img src={headshot} id="headshot" alt="hiking-headshot" />
        <div>
          <p>hello</p>
          <p>more text</p>
        </div>
      </div>
    </div>
  );
};

export default About;
