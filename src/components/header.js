import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false
    };

  }

  componentDidMount() {
   window.addEventListener('scroll', (e)=>{
     if (window.scrollY > 30) {
       this.setState({ isScrolled: true });
     } else {
       this.setState({ isScrolled: false });
     }
    });
  }

  render() {
    return(
      <header className="site-header">
        <div className={"title" + (this.state.isScrolled ? ' scrolled' : '')}>
          { this.props.location.pathname !== '/' &&
            <h1>
              <Link to="/">Eric Chung</Link>
            </h1>
          }
        </div>
        <Navigation />
        <div id="toggle-nav">
          <span id="mid"></span>
        </div>
      </header>
    );
  }

}

export default Header;
