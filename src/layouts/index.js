import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';

import Header from '../components/Header/Header'
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
            { name: 'description', content: 'Eric Chung is a web developer based in Sydney, Australia. Experience building beautiful digital solutions. Adept in HTML, CSS, JavaScript, React and WordPress.' },
            { name: 'keywords', content: 'eric, chung, web developer, web, developer, design, UX, UI, magento 2, wordpress, front end' },
            { name: 'google', content: 'notranslate' }
          ]}
        />
        <Header siteTitle={this.data.site.siteMetadata.title} />
        <main>
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
