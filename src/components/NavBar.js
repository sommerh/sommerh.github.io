import React, { useState } from 'react';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav id="navbar" className="font-link teal-bg">
      <a href="/" className="pink-txt-lt nav-name">
        {'<hs />'}
      </a>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
          <li>
            <a
              href="https://drive.google.com/file/d/1hX0BahOHpJH3hZwlWXdykdpZ6Qdp51Xh/view?usp=sharing"
              aria-label="View Hannah's Resume"
              rel="noreferrer"
              target="_blank"
              className="menu white-txt"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
