import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="title">
      <h1>
        <Link to="/" style={{opacity: '0.7'}}><div className="first-name">E<span>ri</span>c</div><span style={{opacity: '1'}}className="last-name">Chung</span></Link>
      </h1>
    </div>
  </header>
)

export default Header
