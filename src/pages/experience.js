import React from 'react'
import Link from 'gatsby-link'

const ExperiencePage = () => (
  <section className="experience-page">
    <div className="wrapper">
      <h1 className="page-title">Experience</h1>
      <div className="content">
        <div className="page-intro">
          <div className="page-intro-left-col">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
            Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
            Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo.
            Curabitur suscipit sit amet purus facilisis interdum.</p>
          </div>
          <div className="page-intro-right-col">
            <div className="button" role="button">
              <a href="#">View resume</a>
            </div>
          </div>
        </div>
        <div className="timeline">
          <ul className="experiences">
            <li className="experience">
              <h2 className="role">Web Developer</h2>
              <h3 className="company">BirdBrain, Jan 2018 to Present</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
              Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
              Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo.
              Curabitur suscipit sit amet purus facilisis interdum.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default ExperiencePage
