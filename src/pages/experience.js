import React from 'react'
import Link from 'gatsby-link'
import ExperienceList from '../components/Experience/ExperienceList';

const ExperiencePage = () => (
  <section className="experience-page">
    <h1 className="page-title">Experience</h1>
    <div className="page-intro">
      Test
      <div className="resume-link">
        <a href="#">View my resume <i className="far fa-file icon"></i></a>
      </div>
    </div>
    <div className="timeline">
      <ExperienceList />
    </div>
  </section>
)

export default ExperiencePage
