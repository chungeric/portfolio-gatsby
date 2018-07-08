import React from 'react'
import Link from 'gatsby-link'
import sydney1 from '../assets/images/home/sydney1.jpg';


const IndexPage = () => (
  <div className="home" style={{ backgroundImage: `url(${sydney1})` }}>
    <div className="overlay">
      <div className="box">
        <h1>Eric Chung</h1>
        <h2>Web Developer based in Sydney, Australia</h2>
        <div className="socials">
          <ul>
            <li><a href="https://github.com/chungeric" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/eric96/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.freecodecamp.org/chungeric" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
