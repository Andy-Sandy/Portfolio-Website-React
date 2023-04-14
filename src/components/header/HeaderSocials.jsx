import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andreas-sandbl%C3%A5st-70607824b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Andy-Sandy?tab=repositories" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials