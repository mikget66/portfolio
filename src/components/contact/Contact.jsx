import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in toch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mikelhfzy@gmail.com</h5>
            <a href="mailto:mikelhfzy@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>messanger</h4>
            <h5>Michael Anwer</h5>
            <a href="https://m.me"target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>whatsaap</h4>
            <h5>01225292831</h5>
            <a href="https://api.whatsapp.com/send?phone=+201225292831"target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='your name' required/>
          <input type="email" name="email" placeholder='your email' id="" required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button className='btn btn-primary'>
            send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact