import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';

import Header from '../components/Header/Header'
import '../assets/styles/index.scss'
import favicon from '../assets/icon/apple-touch-icon.png';

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
        <Helmet>
          <title>{this.data.site.siteMetadata.title}</title>
          <meta name="description" content="Eric Chung is a web developer based in Sydney, Australia. Experience building beautiful digital solutions. Adept in HTML, CSS, JavaScript, React and WordPress." />
          <meta name="keywords" content="eric, chung, web developer, web, developer, design, UX, UI, magento 2, wordpress, front end" />
          <meta name="google" content="notranslate" />
          {/* <link rel="shortcut icon" type="image/png" href={`${favicon}`} /> */}
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        </Helmet>
        <Header siteTitle={this.data.site.siteMetadata.title} />
        <main id="main">
          <div className="content">
            {this.children()}
          </div>
        </main>
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
