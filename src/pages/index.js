import React, { Component } from 'react';
import Link from 'gatsby-link'
import sydney1 from '../assets/images/home/sydney1.jpg';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.fetchGithubData = this.fetchGithubData.bind(this);
    this.state = { url: ''};
  }
  fetchGithubData() {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", 'https://api.github.com/users/chungeric');
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

  componentDidMount() {
    this.fetchGithubData()
    .then((data) => {
      const avatarUrl = JSON.parse(data).avatar_url;
      this.setState({ url: avatarUrl });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="home">
        <div className="wrapper">
          <div className="find-me">
            <div className="github-avatar">
              <div className="avatar" style={{backgroundImage: `url(${this.state.url})`}} />
            </div>
            <div className="find-me-content">
              <h1>Eric Chung</h1>
              <h2>Web Developer based in Sydney, Australia</h2>
              <ul className="socials">
                <li><a href="https://github.com/chungeric" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/eric96/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                {/* <li><a href="https://www.freecodecamp.org/chungeric" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li> */}
              </ul>
            </div>
          </div>
          <div className="about">
            <h3>Hello!</h3>
            <div className="text">
              <p>I'm Eric. I have experience using a range of web technologies and
              thoroughly enjoy putting my creative senses to the test.</p>
              <p>I am well versed in HTML5, CSS3, JavaScript(ES6+), React,
              WordPress, Magento 2 and PHP. If you're interested, feel free to
              <Link to="/projects"> browse my latest projects</Link>, or
              <Link to="/contact"> get in touch</Link> with me!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default IndexPage
