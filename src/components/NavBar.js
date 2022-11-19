import React from 'react';

//TODO: make the section user clicks turn pink
//OR
//make name pink and when user hovers increase size

const NavBar = () => {
  return (
    <nav id="navbar" className="font-link teal-bg">
      <a href="#home" className="pink-txt">
        {'</> HANNAH SOMMER'}
      </a>
      <a href="#about" className="white-txt">
        About
      </a>
      <a href="#projects" className="white-txt">
        Projects
      </a>
      <a href="#skills" className="white-txt">
        Skills
      </a>
      <a href="#contact" className="white-txt">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
