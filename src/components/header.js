import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false
    };

  }

  componentDidMount() {
   window.addEventListener('scroll', (e)=>{
     if (window.scrollY > 80) {
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
          <h1>
            <Link to="/"><div className="first-name">E<span>ri</span>c</div><span className="last-name">Chung</span></Link>
          </h1>
        </div>
      </header>
    );
  }

}

export default Header;
