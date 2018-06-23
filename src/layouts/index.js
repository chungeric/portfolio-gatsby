import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';
// import reactLogo from '../pages/images/home/react.jpg'

import Header from '../components/header'
import Navigation from '../components/navigation'
import '../assets/styles/index.scss'

class Layout extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.children = props.children;
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Helmet
          title={this.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio site of Eric Chung' },
            { name: 'keywords', content: 'eric, chung, web developer, web, developer, design, UX, UI, magento 2, wordpress, front end' },
            { name: 'google', content: 'notranslate' }
          ]}
        />
        <Header siteTitle={this.data.site.siteMetadata.title} location={this.props.location} />
        <div id="main">
          <div className="content">
            {this.children()}
          </div>
        </div>
      </div>
    );
  }
}

// const Layout = ({ children, data }) => (
//
// )

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
