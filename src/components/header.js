import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="title">
      <h1>
        <Link to="/">Eric <div className="last-name"><span>C</span><span>h</span><span>u</span><span>n</span><span>g</span></div></Link>
      </h1>
    </div>
    <div className="socials">
      <ul>
        <li><i className="fab fa-github"></i></li>
        <li><i className="fab fa-linkedin-in"></i></li>
        <li><i className="fab fa-free-code-camp"></i></li>
        <li><i className="fab fa-instagram"></i></li>
      </ul>
    </div>
  </header>
)

export default Header
