import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation';

class Header extends Component {
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
      <header className="site-header">
        <div className="wrapper">
          <div className={"title" + (this.state.isScrolled ? ' scrolled' : '')}>
            { this.props.location !== null &&
              <Link exact  to="/" activeStyle={{ color: 'white' }}>Eric Chung</Link>
            }
          </div>
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
