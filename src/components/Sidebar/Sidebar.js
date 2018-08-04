import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation';
import portrait from '../../assets/images/portrait.jpg';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false
    };

  }

  componentDidMount() {
   // window.addEventListener('scroll', (e)=>{
   //   if (window.scrollY > 30) {
   //     this.setState({ isScrolled: true });
   //   } else {
   //     this.setState({ isScrolled: false });
   //   }
   //  });
  }

  render() {
    return(
      <div id="sidebar">
        <img className="portrait" src={portrait} />
        <h1 className={"title" + (this.state.isScrolled ? ' scrolled' : '')}>
          <Link exact  to="/" activeClassName="active">
            <span className="letters">Eric Chung</span>
          </Link>
        </h1>
        <span className="subtitle">Web Developer based in Sydney, Australia</span>
        <Navigation />
      </div>
    );
  }

}

export default Sidebar;
