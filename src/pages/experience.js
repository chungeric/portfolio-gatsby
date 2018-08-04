import React from 'react'
import Link from 'gatsby-link'
import ExperienceList from '../components/Experience/ExperienceList';
import resume from '../assets/resume.pdf';

const ExperiencePage = () => (
  <section className="experience-page">
    <h1 className="page-title">Experience</h1>
    <div className="resume-link">
      <a href={resume} target="_blank" rel="noopener noreferrer">Resumé download</a>
    </div>
    <div className="timeline">
      <ExperienceList />
    </div>
  </section>
)

export default ExperiencePage
