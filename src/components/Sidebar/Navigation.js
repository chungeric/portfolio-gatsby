import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     navOpen: false
  //   };
  // }
  //
  // toggleNav = () => {
  //   const { navOpen } = this.state;
  //   this.setState({ navOpen: !navOpen });
  //
  //   if (!navOpen && window.innerWidth < 1080) {
  //     document.querySelector('#content').classList.add('nav-open');
  //   } else {
  //     document.querySelector('#content').classList.remove('nav-open');
  //   }
  // }

  render() {
    // const { navOpen } = this.state;
    return (
      <nav className="navigation">
        <div className="links-container">
          <ul className="links">
            <li><Link exact to="/" className="index-link" activeClassName="active" onClick={this.toggleNav}>Home</Link></li>
            <li><Link to="/projects" activeClassName="active" onClick={this.toggleNav}>Projects</Link></li>
            <li><Link to="/experience" activeClassName="active" onClick={this.toggleNav}>Experience</Link></li>
            <li><Link to="/contact" activeClassName="active" onClick={this.toggleNav}>Contact</Link></li>
            <li><Link to="/blog" activeClassName="active" onClick={this.toggleNav}>Blog</Link></li>
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
