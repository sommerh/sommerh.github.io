import React, { useState } from 'react';

//TODO: make the section user clicks turn pink (window.location.href)
//OR
//make name pink and when user hovers increase size

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav id="navbar" className="font-link teal-bg">
      <a href="/" className="pink-txt-lt">
        {'</> HANNAH SOMMER'}
      </a>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {/* <svg
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg> */}

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
      <div
        className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <ul>
          <li>
            <a href="#about" className="menu white-txt">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="menu white-txt">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="menu white-txt">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="menu white-txt">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
