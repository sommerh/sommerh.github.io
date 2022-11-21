import React from 'react';
import headshot from '../images/headshot.jpg';

const About = () => {
  return (
    <div id="about" className="segment yellow-bg">
      <div id="about-body">
        <img src={headshot} id="headshot" alt="hiking-headshot" />
        <div id="about-text">
          <h1 className="font-link pink-txt">ABOUT ME</h1>
          <p>{`Hi, I'm Hannah. I’m a public health social worker and program manger-turned-software engineer based in New York City. Prior to my shift into this industry, I worked in a healthcare setting with individuals who have experienced crime. I loved the work I was doing, but found myself being pulled in another direction as I saw the profound impact tech could have on an individual’s wellbeing and quality-of-life.`}</p>
          <p>{`In social work, I learned how to use my set of skills to solve difficult constantly changing problems. I worked with interdisciplinary contacts and thought creatively to find the best solutions for my clients. As a program manager, I supervised and supported the team, managed and facilitated volunteer trainings, and kept a high caseload of my own.`}</p>
          <p>
            {`In Fullstack Academy’s Grace Hopper Program, I learned to build projects from ideation to deployment while implementing Agile methods, involving high levels of `}
            <b>communication and collaboration</b>
            {`. I enjoyed transferring my `}
            <b>problem-solving, creativity, and mangement skills</b>
            {` to this new
            environment. I am excited to contribute to a team at a
            purpose-driven company where I can bring this all together.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
