import React, { Component } from 'react'
import Link from 'gatsby-link'

import projects from '../data/projects';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      isHovered: false,
      projectHovered: null
    };
  }

  onMouseEnter(i) {
    this.setState({ isHovered: true, projectHovered: i });
  }
  onMouseLeave() {
    this.setState({ isHovered: false, projectHovered: null });
  }

  render() {
    return(
      <section className="projects-page">
        <div className="wrapper">
          <h1 className="page-title">Projects</h1>
          <div className="content">

            <ul className="projects">

              { projects.projects.map((project, i) => {
                return (
                  <li key={i} className={`project ${this.state.isHovered ? (i == this.state.projectHovered ? 'hovered' : 'no-hover') : ''}`} onMouseEnter={() => this.onMouseEnter(i)} onMouseLeave={() => this.onMouseLeave()} >
                    {/* <div className="image" style={{ backgroundImage: `url(${project.image})` }} /> */}
                    <div className="project-content">
                      <h2><Link to={project.pageLink}>{project.title}</Link></h2>
                      <p>{project.description}</p>
                      <small className="tags">{project.tags}</small>
                      {/* <div className="project-links">

                      </div> */}
                    </div>
                  </li>
                );
              }) }

            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsPage
