import React from 'react'
import CV from '../../assets/CV_en.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA