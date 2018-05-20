import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';

import Header from '../components/header'
import Navigation from '../components/navigation'
import '../assets/styles/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div id="particles">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 20,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#0C1921"
            },
            "size": {
              "value": 5,
              "random": true
            },
            "line_linked": {
              "enable": true,
              "color": "#fff",
              "opacity": 0.4,
              "width": 1
            },
            "shape": {
              "type": "circle"
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out"
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 200,
                "size": 24,
                "opacity": 0.4
              }
            }
          },
          "retina_detect": true
        }}
      />
    </div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Navigation />
    <div id="main">
      <div className="content">
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
