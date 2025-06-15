import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="navbar-logo">My Portfolio</h3>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;