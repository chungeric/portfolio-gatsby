import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <section className="contact-page">
    <div className="wrapper">
      <h1 className="page-title">Contact</h1>
      <form>
        <div className="fields">
          <div className="field name">
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="field email">
            <label for="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="field message">
            <label for="message">Message</label>
            <textarea id="message" />
          </div>
        </div>
      </form>

    </div>
  </section>
)

export default ContactPage
