import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';
// import reactLogo from '../pages/images/home/react.jpg'

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
              "value": 40,
              "density": {
                "enable": true,
                "value_area": 1000
              }
            },
            "color": {
              "value": "#0C1921"
              // "value": "random"
            },
            "size": {
              "value": 4,
              "random": true
            },
            "line_linked": {
              "enable": true,
              "color": "#fff",
              "opacity": 0.4,
              "width": 1
            },
            "shape": {
              "type": "circle",
              // "image": {
              //   "src": reactLogo
              // }
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              // "onclick": {
              //   "enable": true,
              //   "mode": "repulse"
              // },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 200,
                "size": 20,
                "opacity": 0.4
              },
              "repulse": {
                "duration": 0.4
              },
              "grab": {
                "distance": 200,
                "line_linked": {
                  "opacity": 0.2
                }
              },
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
