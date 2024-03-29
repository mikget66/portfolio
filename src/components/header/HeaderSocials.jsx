import React from 'react'
import {BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://dribble.com" target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials