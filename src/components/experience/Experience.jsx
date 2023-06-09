import React from 'react'
import './experience.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Development tools I have used</h5>
      <h2>Development Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>Three.js</h4>
               
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>Android Studio</h4>
                
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience