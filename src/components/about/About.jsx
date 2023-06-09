import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>Graduated Computer Engineering at HVL Bergen</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Several projects linked to school and some in my freetime</small>
            </article>

          </div>

          <p>
            My education consists of Computer & Electronics from Romsdal VGS, 
            Preliminary Course for Engineering from NTNU Ålesund and Computer Engineering at HVL Bergen. <br/>
            Most of my projects are related to school, but I've also made projects in my spare time, like this website!
          </p>

          <div className='about__buttons'>
            <a href="#contact" className='btn btn-primary'>Contact me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About