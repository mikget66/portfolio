import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: img2,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: img3,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: img4,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: img5,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: img6,
    title: 'crypto currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className="container porfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Portfolio