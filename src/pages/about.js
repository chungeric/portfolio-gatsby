import React, { Component } from 'react'
import Link from 'gatsby-link'

class AboutPage extends Component {
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
      <section className="about-page">
        <div className="wrapper">
          { this.state.url &&
            <img src={this.state.url} alt="Avatar" className="github-avatar"/>
          }
          <h1 className="page-title">A bit about me</h1>
          <div className="content">
            { this.state.url &&
              <img src={this.state.url} alt="Avatar" className="github-avatar"/>
            }
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia
              nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum
              ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris
              ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia
              nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum
              ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris
              ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia
              nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum
              ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris
              ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.</p>
            </div>
          </div>


        </div>
      </section>
    );
  }
}

export default AboutPage
