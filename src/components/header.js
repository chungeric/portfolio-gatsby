import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="title">
      <h1>
        <Link to="/">Eric Chung</Link>
      </h1>
    </div>
  </header>
)

export default Header
