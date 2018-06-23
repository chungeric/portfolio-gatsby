import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/about" className="underline">About</Link></li>
      <li><Link to="/projects" className="underline">Projects</Link></li>
      <li><Link to="/resume" className="underline">Resume</Link></li>
      <li className="socials">
        <ul>
          <li><i className="fab fa-github"></i></li>
          <li><i className="fab fa-linkedin-in"></i></li>
          <li><i className="fab fa-free-code-camp"></i></li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Navigation;
