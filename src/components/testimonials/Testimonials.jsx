import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
 import AVTR2 from '../../assets/avatar2.png'
 import AVTR3 from '../../assets/avatar3.png'
 import AVTR4 from '../../assets/avatar4.webp'

 // import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur sunt labore recusandae ex provident soluta tempore, dicta vero et, quasi aperiam minima obcaecati odit saepe? Rerum minima corrupti possimus!'
  },

  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur sunt labore recusandae ex provident soluta tempore, dicta vero et, quasi aperiam minima obcaecati odit saepe? Rerum minima corrupti possimus!'
  },

  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur sunt labore recusandae ex provident soluta tempore, dicta vero et, quasi aperiam minima obcaecati odit saepe? Rerum minima corrupti possimus!'
  },

  {
    avatar:AVTR4,
    name:'Nana Ama McBrown',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur sunt labore recusandae ex provident soluta tempore, dicta vero et, quasi aperiam minima obcaecati odit saepe? Rerum minima corrupti possimus!'
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review From Cilents</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
                <img src={avatar} />  
            </div>

            <h5 className='client__name' >{name}</h5>
            <small className='client__review'>
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