import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation';
import portrait from '../../assets/images/portrait.jpg';

class Sidebar extends Component {
  render() {
    const { toggleNav } = this.props;
    return(
      <div id="sidebar">
        <img className="portrait" src={portrait} />
        <h1 className="title">
          <Link exact  to="/" activeClassName="active">
            <span className="letters">Eric Chung</span>
          </Link>
        </h1>
        <span className="subtitle">Web Developer</span>
        <Navigation toggleNav={toggleNav} />
      </div>
    );
  }

}

export default Sidebar;
