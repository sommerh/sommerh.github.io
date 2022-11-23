import React from 'react';

//TODO: make the section user clicks turn pink (window.location.href)
//OR
//make name pink and when user hovers increase size

const NavBar = () => {
  return (
    <nav id="navbar" className="font-link teal-bg">
      <a href="/" className="pink-txt-lt">
        {'</> HANNAH SOMMER'}
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div id="nav-menu">
        <a href="#about" className="menu white-txt">
          About
        </a>
        <a href="#projects" className="menu white-txt">
          Projects
        </a>
        <a href="#skills" className="menu white-txt">
          Skills
        </a>
        <a href="#contact" className="menu white-txt">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
