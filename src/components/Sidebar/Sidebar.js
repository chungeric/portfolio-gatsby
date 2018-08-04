import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation';

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
        <div className="wrapper">
          <div className={"title" + (this.state.isScrolled ? ' scrolled' : '')}>
            <Link exact  to="/" activeClassName="active">
              <span className="letters">Eric Chung</span>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    );
  }

}

export default Sidebar;
