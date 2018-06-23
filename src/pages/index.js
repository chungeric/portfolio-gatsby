import React from 'react'
import Link from 'gatsby-link'
import htmlLogo from "./images/home/html.jpg";
import cssLogo from "./images/home/css.jpg";
import jsLogo from "./images/home/javascript.jpg";
import reactLogo from "./images/home/react.jpg";
import wpLogo from "./images/home/wordpress.jpg";
import mageLogo from "./images/home/magento.jpg";
import sassLogo from "./images/home/sass.jpg";


const IndexPage = () => (
  <div className="home">
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
)

export default IndexPage
