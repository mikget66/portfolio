import React from 'react'
import './experiance.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experience'>
      <h5>what Skills I have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Bootstap</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>tailwind</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>react</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experiance__backend">
          <h3>backend Development</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>              <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small></div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance