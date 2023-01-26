import React from 'react'
import './nav.css'
import { useState } from 'react'

import {AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'
import { RiServerLine } from 'react-icons/ri'
import { BiBook } from 'react-icons/bi'

const Nav = () => {

  const [active, setActive] = useState('home_active')
  // بص الستايت دى بتتغير لما تدوس علي اللينك  

  return (
    <nav>
      <a href='#' 
      onClick={() => setActive('home_active')}
      className={active === 'home_active' ? 'active' : ''}
      //  هنا بنتشيك لو الستايت نفس الى انا عايزه بطبق كلاس الاكتيف
      >
        <AiOutlineHome />
      </a>

      <a href='#about' onClick={() => setActive('#about')}className={active === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>

      <a href='#experience'onClick={() => setActive('#experience')}className={active === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>

      <a href='#services'onClick={() => setActive('#services')}className={active === '#services' ? 'active' : ''}>
        <RiServerLine />
      </a>

      <a href='#contact'onClick={() => setActive('#contact')}className={active === '#contact' ? 'active' : ''}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav