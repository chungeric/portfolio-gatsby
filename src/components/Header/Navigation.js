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
            <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
            <li><Link to="/projects" activeStyle={{ color: 'red' }}>Projects</Link></li>
            <li><Link to="/experience" activeStyle={{ color: 'red' }}>Experience</Link></li>
            <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
            <li><Link to="/blog" activeStyle={{ color: 'red' }}>Blog</Link></li>
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
