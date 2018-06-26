import React, { Component } from 'react'
import Link from 'gatsby-link'
import pictionaryImage from "./images/projects/pictionary.png";
import resPlusImage from "./images/projects/resplus.png";
import simonImage from "./images/projects/simon.png";
import calculatorImage from "./images/projects/calculator.png";
import tictactoeImage from "./images/projects/tictactoe.png";
import pomodoroImage from "./images/projects/pomodoro.png";

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
                    <div className="project-content">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>
                    <Link to={project.pageLink}>Learn more</Link>
                    <a href={project.url}>View project</a>
                  </li>
                );
              }) }

            </ul>

            {/* <div className={`showcase ${this.state.showcaseisFixed ? 'fixed' : ''}`} style="width: "></div> */}

          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsPage
