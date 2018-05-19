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
    <section className="about">
      <h2>Welcome!</h2>
      <p>I am Eric Chung, a <span className="jazz">Web Developer</span> based in Sydney, Australia.</p>
      <p>I make fantastic responsive websites and web applications.</p>
    </section>
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        <li><img src={htmlLogo} alt="html" /></li>
        <li><img src={cssLogo} alt="html" /></li>
        <li><img src={sassLogo} alt="html" /></li>
        <li><img src={jsLogo} alt="html" /></li>
        <li><img src={reactLogo} alt="html" /></li>
        <li><img src={wpLogo} alt="html" /></li>
        <li><img src={mageLogo} alt="html" /></li>
      </ul>
    </section>
  </div>
)

export default IndexPage
