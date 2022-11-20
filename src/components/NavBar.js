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

//NOTES: below code makes name on navbar look like homepage
{
  /* <a href="#home" className="white-txt">
{'</> HA'}
<span className="pink-txt">NN</span>
{'AH SO'}
<span className="pink-txt-lt">MM</span>
{'ER'}
</a> */
}
