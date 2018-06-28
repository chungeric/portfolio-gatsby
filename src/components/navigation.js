import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
      <li><Link to="/projects" activeStyle={{ color: 'red' }}>Projects</Link></li>
      <li><Link to="/experience" activeStyle={{ color: 'red' }}>Experience</Link></li>
      <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
      <li><Link to="/blog" activeStyle={{ color: 'red' }}>Blog</Link></li>
    </ul>
  </nav>
)

export default Navigation;
