import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      riMaxWidth: '9999px',
      riOpacity: 1,
      lastNameOpacity: 1
    };

  }

  componentDidMount() {
   window.addEventListener('scroll', (e)=>{
     if (window.scrollY > 0) {
       this.setState({riMaxWidth: 0, riOpacity: 0, lastNameOpacity: 0})
     } else {
       this.setState({riMaxWidth: '9999px', riOpacity: 1, lastNameOpacity: 1})
     }
    });
  }

  render() {
    return(
      <header className="site-header">
        <div className="title">
          <h1>
            <Link to="/"><div className="first-name" style={{ opacity: 0.7 }}>E<span style={{ maxWidth: this.state.riMaxWidth, opacity: this.state.riOpacity }}>ri</span>c</div><span style={{opacity: this.state.lastNameOpacity}}className="last-name">Chung</span></Link>
          </h1>
        </div>
      </header>
    );
  }

}

export default Header;
