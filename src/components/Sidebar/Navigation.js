import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navigation extends Component {
  render() {
    const { toggleNav } = this.props;
    return (
      <nav className="navigation">
        <div className="links-container">
          <ul className="links">
            <li><Link exact to="/" className="index-link" activeClassName="active" onClick={toggleNav}>Home</Link></li>
            <li><Link to="/projects" activeClassName="active" onClick={toggleNav}>Projects</Link></li>
            <li><Link to="/experience" activeClassName="active" onClick={toggleNav}>Experience</Link></li>
            <li><Link to="/contact" activeClassName="active" onClick={toggleNav}>Contact</Link></li>
            <li><Link to="/blog" activeClassName="active" onClick={toggleNav}>Blog</Link></li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="links">
            <li><a href="https://github.com/chungeric" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/eric96/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
