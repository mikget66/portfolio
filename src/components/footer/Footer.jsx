import React from 'react'
import './footer.css'
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>logo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https//:www.facebook.com"><GrFacebookOption/></a>
        <a href="https//:www.instagram.com"><GrInstagram/></a>
        <a href="https//:www.twitter.com"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; some copyright shit.</small>
      </div>
    </footer>
  )
}

export default Footer