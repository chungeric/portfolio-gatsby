import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleNav = () => {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  }

  render() {
    const { navOpen } = this.state;
    return (
      <nav className="navigation">
        <div className={`links-wrapper ${ navOpen ? 'nav-open' : '' }`}>
          <ul className="links">
            <li><Link exact to="/" className="index-link" activeClassName="active" onClick={this.toggleNav}>Home</Link></li>
            <li><Link to="/about" activeClassName="active" onClick={this.toggleNav}>About</Link></li>
            <li><Link to="/projects" activeClassName="active" onClick={this.toggleNav}>Projects</Link></li>
            <li><Link to="/experience" activeClassName="active" onClick={this.toggleNav}>Experience</Link></li>
            <li><Link to="/contact" activeClassName="active" onClick={this.toggleNav}>Contact</Link></li>
            <li><Link to="/blog" activeClassName="active" onClick={this.toggleNav}>Blog</Link></li>
          </ul>
        </div>
        <div id="toggle-nav" className={ navOpen ? 'open' : '' } onClick={this.toggleNav}>
          <span id="mid"></span>
        </div>
      </nav>
    );
  }
}

export default Navigation;
