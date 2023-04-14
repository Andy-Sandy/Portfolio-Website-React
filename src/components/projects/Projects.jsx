import React from 'react'
import './projects.css'
import IMG1 from '../../assets/home assistant.png'
import IMG2 from '../../assets/Three-js-project.png'
import IMG3 from '../../assets/Android_Studio_Icon.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TeSSLa for Home Assistant',
    github: 'https://github.com/Andy-Sandy/TeSSLa-for-HA'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Three.js Project',
    github: 'https://github.com/Andy-Sandy/Andy-Sandy.github.io'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Quiz App in Android Studio',
    github: 'https://github.com/Lyslo/Quizz_app'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='project__item'>
              <div className="project__item-image">
                <img src={image} alt="title" />
              </div>
                <h3>{title}</h3>
                <div className='project__item-cta'>
                  <a href={github}  className='btn btn-primary' target='_blank'>Github</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects