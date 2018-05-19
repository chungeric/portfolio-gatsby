import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
)

export default Navigation;
