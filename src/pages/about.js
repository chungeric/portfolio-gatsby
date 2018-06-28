import React, { Component } from 'react'
import Link from 'gatsby-link'

async function fetchGithubAvatarUrl() {
  const response = await fetch('https://api.github.com/users/chungeric');
  const data = await response.json();
  return data.avatar_url;
}

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { url: ''};
  }

  componentDidMount() {
    fetchGithubAvatarUrl()
    .then((url) => {
      this.setState({ url: url })
    });

  }

  render() {
    return (
      <section className="about-page">
        <div className="wrapper">
          { this.state.url &&
            <img src={this.state.url} alt="Avatar" className="github-avatar"/>
          }
          <h1 className="page-title">A Bit About Me</h1>
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
