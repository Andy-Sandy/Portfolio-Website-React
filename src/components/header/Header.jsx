import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Andreas Sandblåst.png'
import HeaderSocials from './HeaderSocials'
import {BsArrowDownShort} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Andreas Stub Sandblåst</h1>
        <h5 className="text-light">Computer Engineering graduate</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'><BsArrowDownShort /></a>
      </div>
    </header>
  )
}

export default Header