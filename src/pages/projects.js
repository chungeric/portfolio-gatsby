import React from 'react'
import Link from 'gatsby-link'
import pictionaryImage from "./images/projects/pictionary.png";

const ProjectsPage = () => (
  <section className="projects-page">
    <div className="wrapper">
      <h1 className="page-title">Projects</h1>
      <div className="content">

        <ul className="projects">

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${pictionaryImage})` } : { backgroundColor: '#D8D8D8' } } />
              <div className="project-content">
                <h2>React Pictionary</h2>
                <p>Web Application, Personal Project, WIP</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${pictionaryImage})` } : { backgroundColor: '#D8D8D8' } } />
              <div className="project-content">
                <h2>React Pictionary</h2>
                <p>Web Application, Personal Project, WIP</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${pictionaryImage})` } : { backgroundColor: '#D8D8D8' } } />
              <div className="project-content">
                <h2>React Pictionary</h2>
                <p>Web Application, Personal Project, WIP</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={ false ? { backgroundImage: `url(${pictionaryImage})` } : { backgroundColor: '#D8D8D8' } } />
              <div className="project-content">
                <h2>React Pictionary</h2>
                <p>Web Application, Personal Project, WIP</p>
              </div>
            </Link>
          </li>

        </ul>

      </div>
    </div>
  </section>
)

export default ProjectsPage