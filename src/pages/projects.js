import React from 'react'
import Link from 'gatsby-link'
import htmlLogo from "./images/home/html.jpg";

const ProjectsPage = () => (
  <section className="projects-page">
    <div className="wrapper">
      <h1 className="page-title">Projects</h1>
      <div className="content">

        <ul className="projects">

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${htmlLogo})` } : { backgroundColor: '#D8D8D8' } } />
              <h2>React Pictionary</h2>
              <p>Web Application, Personal Project, WIP</p>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${htmlLogo})` } : { backgroundColor: '#D8D8D8' } } />
              <h2>React Pictionary</h2>
              <p>Web Application, Personal Project, WIP</p>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${htmlLogo})` } : { backgroundColor: '#D8D8D8' } } />
              <h2>React Pictionary</h2>
              <p>Web Application, Personal Project, WIP</p>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${htmlLogo})` } : { backgroundColor: '#D8D8D8' } } />
              <h2>React Pictionary</h2>
              <p>Web Application, Personal Project, WIP</p>
            </Link>
          </li>

        </ul>

      </div>
    </div>
  </section>
)

export default ProjectsPage
