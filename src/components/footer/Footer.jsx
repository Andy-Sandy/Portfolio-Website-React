import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__icon'>Me</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/andreassandblast/' target="_blank"><AiFillInstagram/></a>
        <a href='https://www.linkedin.com/in/andreas-sandbl%C3%A5st-70607824b/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Andy-Sandy?tab=repositories' target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__quote">
        <small>An engineer's greatest invention is always the next one.</small>
      </div>
    </footer>
  )
}

export default Footer