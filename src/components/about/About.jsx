import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaUsers } from 'react-icons/fa'
import { FiFolder } from 'react-icons/fi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>+3 years working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clints</h5>
              <small>+200 worldwide</small>
            </article>

            <article className='about__card'>
              <FiFolder className='about__icon'/>
              <h5>project</h5>
              <small>80+ project</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sit rerum exercitationem rem ex harum? Ducimus nobis ad magni
            explicabo placeat obcaecati unde soluta! Molestias quae, 
            mollitia molestiae magni temporibus alias.
          </p>
          <a href="#contact" className='btn btn-primary'>Lit's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About