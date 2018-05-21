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
      <h3>Welcome!</h3>
      <p>I am Eric Chung; a <span className="jazz">Web Developer</span> based in Sydney, Australia.</p>
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
    <section>
      <h3>Lorem</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie, ante a rutrum lacinia, tortor ante tempor elit, ac ultricies diam enim sed ligula. Sed dictum velit in mauris egestas, eget dapibus orci convallis. Fusce vel augue vel enim elementum gravida. Maecenas eget auctor mi, molestie ultrices enim. Cras ultrices neque sit amet mauris efficitur, vel ultricies magna sagittis. Nullam laoreet nulla at lorem congue sollicitudin. Mauris vitae nisi lobortis arcu aliquet vehicula vel vitae ipsum. Aliquam placerat sapien eget interdum pharetra. In at eleifend tortor. Nam nec tortor in mi maximus viverra.</p>
      <p>Pellentesque venenatis felis nec eleifend posuere. Fusce varius magna eu augue convallis finibus. Nam fermentum dignissim imperdiet. Cras varius mi mauris, commodo ornare mi tristique quis. In hac habitasse platea dictumst. Aenean est erat, malesuada ac scelerisque in, accumsan nec lorem. Vestibulum in lorem fringilla, bibendum lorem quis, accumsan purus. Nullam pretium massa sit amet est iaculis, quis sollicitudin massa venenatis. In eget odio nisl. Cras id nulla purus. Vivamus odio sem, rhoncus et massa sed, maximus rutrum odio. Donec pretium nisl nec auctor placerat. In hac habitasse platea dictumst. Donec lobortis turpis lorem, pharetra vehicula erat molestie vitae. Integer hendrerit tellus ipsum, a faucibus risus efficitur vel.</p>
      <p>Cras ligula lectus, vestibulum sit amet feugiat at, convallis id odio. Proin in ultrices mauris. Donec elementum dui ornare diam aliquet vestibulum. Nam dapibus orci id mauris pellentesque tempus. Morbi ac dapibus ligula. Donec gravida leo ut nisl lacinia tincidunt. Aliquam erat volutpat. Donec elementum eleifend vestibulum. Quisque quis erat in urna sodales sollicitudin non quis nulla. Pellentesque vitae justo leo. Sed pretium arcu vitae dolor aliquam imperdiet. Sed eget sapien fermentum, tincidunt leo at, suscipit libero. Quisque lacinia sollicitudin augue nec volutpat. Maecenas egestas metus nisl, vel pretium leo varius ut. Donec rutrum odio arcu, nec fermentum leo molestie a.</p>
    </section>
  </div>
)

export default IndexPage
