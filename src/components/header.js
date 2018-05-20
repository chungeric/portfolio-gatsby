import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="title">
      <h1>
        <Link to="/"><div className="first-name">E<span>ri</span>c</div><span className="last-name">Chung</span></Link>
      </h1>
    </div>
  </header>
)

export default Header
