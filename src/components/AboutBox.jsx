import React from 'react'
import cv_wisarut from '../assets/download/CV_WISARUT.pdf'

function AboutBox() {
  return (
    <section className='section' id='about'>
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/* About Me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, fugit perspiciatis! Corporis accusantium velit veniam! Amet itaque aliquam debitis dicta eius ipsum dolorem, assumenda quia nostrum provident, voluptas tenetur cupiditate.
            </p>
            <div className="about-btn">
              <a href={cv_wisarut} target='_blank'>
                <button className='btn'>Download CV <i className='uil uil-import'></i></button>
              </a>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skill-header">
              <h3>Front-end</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>TailwindCss</span>
              <span>JavaScrip</span>
              <span>Bootstrap</span>
              <span>React</span>
              <span>VUE</span>
              <span>Nuxt</span>
            </div>
          </div>

          <div className="skills-box">
            <div className="skill-header">
              <h3>Back-end</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node js</span>
              <span>Spring Boots</span>
              <span>Java</span>
              <span>JavaScrip</span>
            </div>
          </div>

          <div className="skills-box">
            <div className="skill-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBox