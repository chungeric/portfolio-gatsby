import React from 'react'
import Link from 'gatsby-link'
import ExperienceList from '../components/Experience/ExperienceList';

const ExperiencePage = () => (
  <section className="experience-page">
    <div className="wrapper">
      <h1 className="page-title">Experience</h1>
      <div className="page-intro">
        <div className="page-intro-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
          Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
          Morbi sagittis non odio ac mollis.</p>
        </div>
        <div className="page-intro-right">
          <div className="resume-link">
            <a href="#">View resume <i className="fas fa-external-link-alt icon"></i></a>
          </div>
        </div>
      </div>
      <div className="timeline">
        <ExperienceList />
      </div>
    </div>
  </section>
)

export default ExperiencePage
