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
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
        <a href='https://github.com'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andreas Sandblåst. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer