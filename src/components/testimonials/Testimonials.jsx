import './testimonials.css'
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: avatar1,
    name: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci placeat nam alias ipsa fuga iste optio officiis! Beatae nostrum maxime molestias quisquam distinctio quaerat deserunt ipsa vel, minima error facere."
  },
  {
    avatar: avatar2,
    name: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci placeat nam alias ipsa fuga iste optio officiis! Beatae nostrum maxime molestias quisquam distinctio quaerat deserunt ipsa vel, minima error facere."
  },
  {
    avatar: avatar3,
    name: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci placeat nam alias ipsa fuga iste optio officiis! Beatae nostrum maxime molestias quisquam distinctio quaerat deserunt ipsa vel, minima error facere."
  },
  {
    avatar: avatar4,
    name: 'name',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci placeat nam alias ipsa fuga iste optio officiis! Beatae nostrum maxime molestias quisquam distinctio quaerat deserunt ipsa vel, minima error facere."
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">

      <h5> reviews from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimaonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials