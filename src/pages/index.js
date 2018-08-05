import React, { Component } from 'react';
import Link from 'gatsby-link'
import sydney1 from '../assets/images/home/sydney1.jpg';

class IndexPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.fetchGithubData = this.fetchGithubData.bind(this);
  //   this.state = { url: ''};
  // }
  // fetchGithubData() {
  //   return new Promise(function(resolve, reject) {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("GET", 'https://api.github.com/users/chungeric');
  //     xhr.onload = () => resolve(xhr.responseText);
  //     xhr.onerror = () => reject(xhr.statusText);
  //     xhr.send();
  //   });
  // }
  //
  // componentDidMount() {
  //   this.fetchGithubData()
  //   .then((data) => {
  //     const avatarUrl = JSON.parse(data).avatar_url;
  //     this.setState({ url: avatarUrl });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  render() {
    return (
      <div className="home">
        <div className="mobile-header">
          <span className="name">Eric Chung</span>
          <span className="title">Web Developer | Sydney, Australia</span>
          <ul className="socials">
            <li>
              <a href="https://github.com/chungeric" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric96/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/chungeric/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="about">
          <span className="page-title">A bit about me</span>
          <div className="text">
            <p>Hey there! I'm Eric. I am a web developer based in Sydney, Australia,
            with industry experience using <abbr title="Hyper Text Markup Language 5">HTML5</abbr>
            <abbr title="Cascading Style Sheets 3">CSS3</abbr>
            <abbr title="JavaScript">JavaScript(ES6+)</abbr>
            <abbr title="ReactJS">React</abbr>
            <abbr title="WordPress">WordPress</abbr>
            <abbr title="Magento 2">Magento 2</abbr>
            and <abbr title="PHP">PHP</abbr>.</p>

            <p>I thoroughly enjoy putting my creative senses to the test and
            always aim to stay up to date with the latest language updates and
            web trends. I am always open and eager to add more languages and
            skills to my developer belt.</p>

            <p>Feel free to <Link className="link" to="/projects">browse my latest projects</Link>,
            or <Link className="link" to="/contact">get in touch</Link> with me!</p>
          </div>
        </div>
      </div>
    );
  }
}
export default IndexPage
