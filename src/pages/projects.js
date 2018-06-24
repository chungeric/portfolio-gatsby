import React from 'react'
import Link from 'gatsby-link'
import pictionaryImage from "./images/projects/pictionary.png";
import resPlusImage from "./images/projects/resplus.png";
import simonImage from "./images/projects/simon.png";
import calculatorImage from "./images/projects/calculator.png";
import tictactoeImage from "./images/projects/tictactoe.png";
import pomodoroImage from "./images/projects/pomodoro.png";

const ProjectsPage = () => (
  <section className="projects-page">
    <div className="wrapper">
      <h1 className="page-title">Projects</h1>
      <div className="content">

        <ul className="projects">

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${pictionaryImage})` }} />
              <div className="project-content">
                <h2>React Pictionary</h2>
                <p>Web Application, Personal Project, WIP</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${resPlusImage})` }} />
              <div className="project-content">
                <h2>Residents Plus</h2>
                <p>Web Application, University Project</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${simonImage})` }} />
              <div className="project-content">
                <h2>Simon</h2>
                <p>Front-End Web Development, Javascript</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${calculatorImage})` }} />
              <div className="project-content">
                <h2>JavaScript Calculator</h2>
                <p>Front-End Web Development, Javascript</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${tictactoeImage})` }} />
              <div className="project-content">
                <h2>Tic Tac Toe</h2>
                <p>Front-End Web Development, Javascript</p>
              </div>
            </Link>
          </li>

          <li className="project">
            <Link to="/projects/pictionary">
              <div className="image" style={{ backgroundImage: `url(${pomodoroImage})` }} />
              <div className="project-content">
                <h2>Pomodoro Clock</h2>
                <p>Front-End Web Development, Javascript</p>
              </div>
            </Link>
          </li>

        </ul>

      </div>
    </div>
  </section>
)

export default ProjectsPage
