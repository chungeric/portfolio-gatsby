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
        <div className="about">
          <span className="page-title">A bit about me</span>
          <div className="text">
            <p>I am a web developer based in Sydney, Australia, with
            proven experience and expertise in <mark>HTML5</mark>, <mark>CSS3</mark>,
            <mark> JavaScript(ES6+)</mark>, <mark>React</mark>, <mark>WordPress</mark>,
            <mark> Magento 2</mark> and <mark>PHP</mark>.</p>

            <p>I have experience using a range of web technologies and thoroughly
            enjoy putting my creative senses to the test. I always aim to stay
            up to date with the latest language updates and web trends and am
            always open and eager to add more languages and skills to my
            developer belt.</p>

            <p>Feel free to <Link to="/projects">browse my latest projects</Link>,
            or <Link to="/contact">get in touch</Link> with me!</p>
          </div>
        </div>
        <div className="find-me">
          <ul className="socials">
            <li><a href="https://github.com/chungeric" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/eric96/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default IndexPage
