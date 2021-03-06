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
        <h1 className="page-title">Projects</h1>
        <div className="content">

          <ul className="projects">

            { projects.projects.map((project, i) => {
              return (
                <li key={i} className={`project ${this.state.isHovered ? (i == this.state.projectHovered ? 'hovered' : 'no-hover') : ''}`} onMouseEnter={() => this.onMouseEnter(i)} onMouseLeave={() => this.onMouseLeave()} >
                  <div className="project-content">
                    <span className="project-name"><Link to={project.pageLink}>{project.title}</Link></span>
                    <p className="project-description">{project.description}</p>
                    <ul className="tags">
                      { project.tags.map((tag, i) => {
                        return (
                          <li key={i} className="tag">{tag}</li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }) }

          </ul>
        </div>
      </section>
    );
  }
}

export default ProjectsPage
