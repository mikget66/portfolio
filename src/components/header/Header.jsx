import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Michael</h1>
        <h5 className="text-light">Full stack developer</h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt="me npm start" />
        </div>

        <a href="#contact"className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header