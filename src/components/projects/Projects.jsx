import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio website.png'
import IMG2 from '../../assets/Three-js-project.png'
import IMG3 from '../../assets/quiz app.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/Andy-Sandy/Portfolio-Website-React'
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
  },
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